import React from 'react'
import { Flex, Text, Button, Input } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Flex w="100%" h="100vh">
        <Flex 
        w="100%" 
        flexDir="column" 
        ml="20%" 
        mt="5%" 
        mr="20%"
        color="white">
          <Text fontWeight="700" fontSize="30">Tasks</Text>
          <Flex mt="10%">
            <Input variant="flushed" placeholder='Add Task' width="60%"/>
            <Button ml="5" bg="cyan.800">Add Task</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default App
