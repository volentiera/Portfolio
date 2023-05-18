
import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {
    const [scrollSticky, setScrollSticky] = useState('initial');

    
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setScrollSticky('sticky')
            } else {
                setScrollSticky('initial')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrollToSection = (id:  string) => {
        window.scrollTo({
            top: document.getElementById(id)?.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <Box style={{ position: scrollSticky as 'sticky' }} className='navbar-position' display={'flex'} alignItems={'center'} justifyContent={'space-between'} as='section' bg={'#333'} w={"100%"} h={"10vh"} textAlign={'center'} shadow={'lg'}>
            <Text padding={'5'}  display={'flex'} as={'a'} href={'#'} scrollBehavior={'smooth'} color={'#fff'} _hover={{ color: '#ccc' }}>
                <FontAwesomeIcon  fontSize={'2rem'} icon={faLaptopCode} />
            </Text>
            <Box w={"auto"} h={"auto"} padding={'12'} display={'flex'}>
                    <Text color={'#fff'} padding={'5'} as={'a'} cursor={'pointer'} onClick={() => scrollToSection('header')} _hover={{ color: '#ccc' }}>
                        Sobre Mi
                    </Text>
                    <Text color={'#fff'} padding={'5'} as={'a'} cursor={'pointer'} onClick={() => scrollToSection('main')} _hover={{ color: '#ccc' }}>
                        Mis Proyectos
                    </Text>
                    <Text color={'#fff'} padding={'5'} as={'a'} cursor={'pointer'} onClick={() => scrollToSection('main2')} _hover={{ color: '#ccc' }}>
                        Habilidades
                    </Text>
                    <Text color={'#fff'} padding={'5'} as={'a'} cursor={'pointer'} onClick={() => scrollToSection('footer')} _hover={{ color: '#ccc' }}>
                        Contacto
                    </Text>
            </Box>
        </Box>
    )
}