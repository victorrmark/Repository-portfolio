import { Heading, Box, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Flex
      width="500px"
      maxWidth="100%"
      margin="50px auto 0"
      textAlign="center"
      align='center'
      justify='center'
      direction='column'
      p='20px'
    >
      <Box width="200px" margin="0 auto">
        <img src="../../error-image.png" alt="" />
      </Box>
      <Box mt='20px'> 
        <Heading>Page not found</Heading>
        <Text mt={2} fontSize="xl" fontWeight="semibold">The Route/Component/Page you're looking for does not exist</Text>
        <Text mt={1}>You should propably go back to the homepage</Text>
      </Box>
      <Button as={Link} to="/" maxWidth="100px" colorScheme="blue" mt={10}>
        Go Home
      </Button>
    </Flex>
  );
};

export default ErrorPage;
