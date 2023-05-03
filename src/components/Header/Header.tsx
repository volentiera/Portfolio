
import { Box } from '@chakra-ui/react'
import './index-header.css'


export default function Header() {
    return (
        <Box className='header-box' display={'flex'} alignItems={'center'} justifyContent={'center'} as='section' w={"100%"} h={"100vh"} textAlign={'center'}>
            this is a box
        </Box>
    )
}