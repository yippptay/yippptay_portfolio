import { 
    useClipboard,
    useToast,
    Flex,
    Link,
    Button,
    Icon,
} from '@chakra-ui/react'
import { IoCall } from "react-icons/io5"
import { BsClipboard2CheckFill, BsClipboard2Fill } from "react-icons/bs";

const PhoneContact = () => {
    
    const { onCopy, hasCopied } = useClipboard('+16262362595');
    const toast = useToast({
        title: 'Copied phone to clipboard',
        duration: 1500,
        colorScheme: 'purple',
        isClosable: true,
        position: 'top',
        containerStyle: {
            '@media only screen and (max-width: 600px)': {
                width: '96vw',
            },
        },
    });

    return (
        <>

            <Flex mb={2}
                justify="space-between"
            >
                <Link href="tel:+16262362595">
                    <Button
                        variant="ghost"
                        colorScheme="purple"
                        leftIcon={<IoCall/>}
                    >
                        (626)-236-2595
                    </Button>
                </Link>
                <Button
                    variant="ghost"
                    onClick={function(event){ onCopy(); toast()}}>{hasCopied ? <Icon as={BsClipboard2CheckFill} color='purple.200'/> : <Icon as={BsClipboard2Fill} color='purple.200'/>}
                </Button>
            </Flex>

        </>
    )
}

export default PhoneContact
