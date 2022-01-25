import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../components/shared/Nav';
function Marketplace({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default Marketplace