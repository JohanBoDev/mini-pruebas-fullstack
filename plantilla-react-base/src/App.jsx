import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Text, Stack } from '@chakra-ui/react';


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='flex justify-center gap-y-5 items-center h-screen flex-col'>
<Text fontSize="xl" color="purple.600">
  Título en grande
</Text>

<Stack spacing={4}>
  <Box bg="gray.200" p={4}>Caja 1</Box>
  <Box bg="gray.300" p={4}>Caja 2</Box>
</Stack>
  </div>
  )
}

export default App
