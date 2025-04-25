import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  Stack,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  useToast,
  Container
} from '@chakra-ui/react'

function App() {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState(null)
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState(0)
  const [categoria, setCategoria] = useState("")
  const [id, setId] = useState("")
  const toast = useToast()

  const crearProducto = async () => {
    if (!nombre || !precio || !categoria) {
      toast({
        title: "Campos incompletos.",
        status: "warning",
        isClosable: true,
      })
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/productos", {
        nombre,
        precio,
        categoria
      })

      toast({
        title: "Producto creado.",
        description: `Se agregó ${res.data.nombre}`,
        status: "success",
        isClosable: true,
      })

      setNombre("")
      setPrecio(0)
      setCategoria("")
      obtenerProductos()
    } catch (error) {
      toast({
        title: "Error al crear producto.",
        description: error.message,
        status: "error",
        isClosable: true,
      })
    }
  }

  const eliminarProducto = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/productos/${id}`)
      obtenerProductos()
      toast({
        title: "Producto eliminado.",
        status: "info",
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: "Error al eliminar producto.",
        description: error.message,
        status: "error",
        isClosable: true,
      })
    }
  }

  const obtenerProductos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/productos/")
      setProductos(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const obtenerProductoPorId = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/productos/${id}`)
      setProducto(res.data)
    } catch (error) {
      setProducto(null)
    }
  }

  useEffect(() => {
    obtenerProductos()
  }, [])

  return (
    <Box bg="gray.900" minH="100vh" py={10} px={4}>
      <Container maxW="container.xl">
        <Heading color="white" textAlign="center" mb={8}>
          Todos los productos disponibles
        </Heading>

        {productos.length > 0 ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
            {productos.map((producto) => (
              <Card key={producto.id} bg="gray.800" border="1px" borderColor="whiteAlpha.300">
                <CardHeader>
                  <Heading fontSize="xl" color="white">{producto.nombre}</Heading>
                </CardHeader>
                <CardBody color="gray.200">
                  <Text><strong>Precio:</strong> ${producto.precio}</Text>
                  <Text><strong>Categoría:</strong> {producto.categoria}</Text>
                  <Button
                    mt={4}
                    colorScheme="red"
                    onClick={() => {
                      if (confirm("¿Eliminar este producto?")) eliminarProducto(producto.id)
                    }}
                  >
                    Eliminar
                  </Button>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        ) : (
          <Text color="white" textAlign="center">No tienes productos todavía</Text>
        )}

        <SimpleGrid mt={12} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          <Box bg="white" rounded="lg" p={6} shadow="lg">
            <Heading fontSize="lg" mb={4}>Crear producto</Heading>
            <Stack spacing={3}>
              <Input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <Input placeholder="Precio" type="number" value={precio} onChange={(e) => setPrecio(Number(e.target.value))} />
              <Input placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
              <Button colorScheme="green" onClick={crearProducto}>Crear</Button>
            </Stack>
          </Box>

          <Box bg="white" rounded="lg" p={6} shadow="lg">
            <Heading fontSize="lg" mb={4}>Buscar por ID</Heading>
            <form onSubmit={(e) => { e.preventDefault(); obtenerProductoPorId(id); }}>
              <Stack spacing={3}>
                <Input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
                <Button type="submit" colorScheme="blue">Buscar</Button>
              </Stack>
            </form>
          </Box>

          <Box>
            {producto ? (
              <Box bg="green.100" p={6} rounded="lg" shadow="md">
                <Heading size="md" mb={2}>Producto encontrado</Heading>
                <Text><strong>Nombre:</strong> {producto.nombre}</Text>
                <Text><strong>Precio:</strong> ${producto.precio}</Text>
              </Box>
            ) : (
              <Box bg="red.100" p={6} rounded="lg" shadow="md">
                <Text color="red.700">Producto no encontrado</Text>
              </Box>
            )}
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default App
