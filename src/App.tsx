import './App.css'
import { VStack } from '@chakra-ui/react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='App'>
      <VStack spacing='0px'>
        <Navbar/>
        <Header/>
        <Main/>
        <Footer/>
      </VStack>
    </div>
  )
}

export default App
