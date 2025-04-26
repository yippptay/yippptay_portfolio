import { 
    useClipboard,
    Flex,
    Link,
    Button,
} from '@chakra-ui/react'
import { IoCall, IoClipboard } from "react-icons/io5"

const PhoneContact = () => {
    const { onCopy, hasCopied } = useClipboard('+16262362595')

    return (
        <>

            <Flex mb={2}
                justify="space-between"
            >
                <Link href="tel:+16262362595">
                    <Button
                        variant="ghost"
                        colorScheme="purple"
                        leftIcon={<IoCall />}
                    >
                        (626)-236-2595
                    </Button>
                </Link>
                <Button variant="ghost" onClick={onCopy}>{hasCopied ? 'Copied!' : <IoClipboard/>}</Button>
            </Flex>

        </>
    )
}

export default PhoneContact
