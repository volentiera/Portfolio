
import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'



export default function Navbar() {
    const [scrollBgColor, setScrollBgColor] = useState('initial');
    const [scrollSticky, setScrollSticky] = useState('initial');
    const [scrollTextColor, setScrollTextColor] = useState('initial');

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setScrollBgColor(`#333`);
                setScrollSticky('sticky')
                setScrollTextColor('#fff')
            } else {
                setScrollBgColor('initial');
                setScrollSticky('initial')
                setScrollTextColor('initial')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // const scrollToSection = (id:  string) => {
    //     const element = document.getElementById(id);
    //     element.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <Box style={{ backgroundColor: scrollBgColor, position: scrollSticky as 'sticky' }} className='navbar-position' display={'flex'} alignItems={'center'} justifyContent={'space-between'} as='section' bg={'#ccc'} w={"100%"} h={"10vh"} textAlign={'center'}>
            <Text padding={'5'} display={'flex'} as={'a'} target='_blank' href={'https://github.com/volentiera'}>
                <FontAwesomeIcon color={scrollTextColor} fontSize={'2rem'} icon={faGithubSquare} />
            </Text>
            <Box w={"auto"} h={"auto"} padding={'12'} display={'flex'}>
                    <Text color={scrollTextColor} padding={'5'} as={'a'} href={'#home'} _hover={{ color: '#888' }}>
                        Sobre Mi
                    </Text>
                    <Text color={scrollTextColor} padding={'5'} as={'a'} href={'#home'} _hover={{ color: '#888' }}>
                        Mis Proyectos
                    </Text>
                    <Text color={scrollTextColor} padding={'5'} as={'a'} href={'#home'} _hover={{ color: '#888' }}>
                        Habilidades
                    </Text>
                    <Text color={scrollTextColor} padding={'5'} as={'a'} href={'#home'} _hover={{ color: '#888' }}>
                        Contacto
                    </Text>
            </Box>
        </Box>
    )
}