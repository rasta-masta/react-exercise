import { Box, SimpleGrid } from "@chakra-ui/react"
import { color } from "framer-motion"

export default function Dashboard() {
  
  // const boxStyles = {
  //   p: "10px",
  //   bg:"purple",
  //   color:"white",
  //   m:"10px",
  //   textAlign: "center",
  //   filter: "blur(1px)",
  //   cursor: "pointer",
  //   ":hover" : {
  //     color: "black",
  //     bg : "blue.200" 
    // }
  // }

  return (
   <SimpleGrid p="10px" spacing="10px" minChildWidth="250px">
    <Box bg="white" h="200px" border="1px" solid></Box>
    <Box bg="white" h="200px" border="1px" solid></Box>
    <Box bg="white" h="200px" border="1px" solid></Box>
    <Box bg="white" h="200px" border="1px" solid></Box>
   
    <Box bg="white" h="200px" border="1px" solid></Box>
    <Box bg="white" h="200px" border="1px" solid></Box>
    <Box bg="white" h="200px" border="1px" solid></Box>
    <Box bg="white" h="200px" border="1px" solid></Box>

    <Box bg="white" h="200px" border="1px" solid></Box>
    <Box bg="white" h="200px" border="1px" solid></Box>
    <Box bg="white" h="200px" border="1px" solid></Box>
    <Box bg="white" h="200px" border="1px" solid></Box>
   
   </SimpleGrid>
   
   
   
    // <Container as="section" maxW="4*l" p="20px">
    //   <Heading my="30px" p="10px">Chakra UI Components</Heading>
    //   <Text ml="30px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ullam.</Text>
    //   <Text ml="30px" color="blue.300" fontWeight="bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ullam.</Text>

    //   <Box my="30px" p="20px" bg="orange">
    //     <Text color="white">This is a box</Text> 
    //   </Box>

    //   <Box sx={boxStyles}> 
    //     Hello Ninjas
    //     </Box>
    // </Container>
  )
}
