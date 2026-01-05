import { Flex } from '@chakra-ui/react';
import './Footer.css';

function Footer() {
    return(
            <footer >
                <div
                    className='name-card'
                    >
                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        >
                        <p className='initials' >K</p>
                        <p style={{ color: 'white', marginLeft:'12px' }}>
                            Kgomotso
                        </p>
                    </Flex>
                </div>
                <div
                    className='copyright'
                    >
                    <p
                        style={{ color: 'white' }}
                        >
                        Copyright • © {new Date().getFullYear()} Hex Tech
                    </p>
                </div>
            </footer>
    )
}

export default Footer