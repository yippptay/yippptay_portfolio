import { 
    useClipboard,
    useToast,
    Flex,
    Link,
    Button,
    Icon,
} from '@chakra-ui/react'
import { IoMail } from "react-icons/io5"
import { BsClipboard2CheckFill, BsClipboard2Fill } from "react-icons/bs";

const EmailContact = () => {
    
    const { onCopy, hasCopied } = useClipboard('yippptay@gmail.com');
    const toast = useToast({
        title: 'Copied email to clipboard',
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
                <Link href="mailto:yippptay@gmail.com">
                    <Button
                        variant="ghost"
                        colorScheme="purple"
                        leftIcon={<IoMail />}
                    >
                        yippptay@gmail.com
                    </Button>
                </Link>
                <Button
                    variant="ghost"
                    onClick={function(){onCopy(); toast()}}>{hasCopied ? <Icon as={BsClipboard2CheckFill} color='purple.200'/> : <Icon as={BsClipboard2Fill} color='purple.200'/>}
                </Button>
            </Flex>

        </>
    )
}

export default EmailContact
