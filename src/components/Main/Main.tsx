
import { Box } from '@chakra-ui/react'
import Cards from './Card/Cards'
import { CardProps } from './Card/CardProps'

import './index-main.css'

const algo: CardProps[] = [
    {
        name: 'algo',
        image: '123.com',
        description: 'algo',
        languages: ['js', 'ts']
    }, {
        name: 'algo2',
        image: '123.com',
        description: 'algo',
        languages: ['js', 'ts']
    }, {
        name: 'algo3',
        image: '123.com',
        description: 'algo',
        languages: ['js', 'ts']
    }
]

export default function Main() {
    return (
        <Box className='main-box' w={'100%'} h={'100%'} display={'flex'} flexDir={'column'}>
            <Box id='main' display={'flex'} flexWrap={'wrap'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} as='section' w={"100%"} h={"100vh"} textAlign={'center'}>
                {algo.map((card: CardProps, index: number) => (
                    <Cards
                        key={index}
                        name={card.name}
                        image={card.image}
                        description={card.description}
                        languages={card.languages}
                    />
                ))}
            </Box>
            <Box id='main2' className='main-box' display={'flex'} alignItems={'center'} justifyContent={'center'} as='section' w={"100%"} h={"100vh"} textAlign={'center'}>
                this is a main2
            </Box>
        </Box>
    )
}