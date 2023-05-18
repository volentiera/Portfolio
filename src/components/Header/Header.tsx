
import { Box, Heading, Center } from '@chakra-ui/react'
import './index-header.css'
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import CVButton from './CVButton/CVButton';



export default function Header() {
    return (
        <Center id='header' className='header-box' display={'flex'} flexWrap={'wrap'} flexDirection={'column'} as='section' w={"100%"} h={"90vh"} textAlign={'center'}>
            <Box fontSize={'3.5rem'}>
                <Box as='a' target='_blank' href='https://github.com/Volentiera' _hover={{ color: '#333' }}>
                    <FontAwesomeIcon icon={faGithubSquare} />
                </Box>
                &nbsp;
                <Box as='a' target='_blank' href='https://www.linkedin.com/in/santiago-volentiera/' _hover={{ color: '#333' }}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </Box>
            </Box>
            <Box className='profile-picture' border={'solid'} borderColor={'black'} borderRadius={'full'} w={200} h={200}>
                
            </Box>
            <Box>
                <Heading as='h1' size='3xl'>
                    Hola, Soy Santiago.<br />
                    <TypeAnimation className='animation'
                        sequence={[
                            'Analista en Sistemas.',
                            1000,
                            'Desarrollador Full-Stack.',
                            1000,
                        ]}
                        cursor={true}
                        repeat={Infinity}
                    />
                    <br />
                        <a href="src/assets/CV-SantiagoVolentiera.pdf" download={'CV-SantiagoVolentiera.pdf'}>
                            <CVButton/>
                        </a>
                </Heading>
            </Box>
        </Center>
    )
}