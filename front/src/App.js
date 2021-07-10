import React from 'react';
import { ChakraProvider, theme, Container, Center } from '@chakra-ui/react';
import Header from './components/Header';
import Rating from './components/Rating';

import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center w="100vw" h="90vh" mb={4} >
        <Container maxW={'5xl'}>
          <Header title="🤖 Reddit Trend 🚀" />
          <Rating />
        </Container>
      </Center>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
