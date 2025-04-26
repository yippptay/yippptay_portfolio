import { 
    useClipboard,
    Flex,
    Link,
    Button,
} from '@chakra-ui/react'
import { IoMail, IoClipboard } from "react-icons/io5"

const EmailContact = () => {
    const placeholder = 'text to be copied...'
    const { onCopy, hasCopied } = useClipboard('yippptay@gmail.com')

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
                <Button variant="ghost" onClick={onCopy}>{hasCopied ? 'Copied!' : <IoClipboard/>}</Button>
            </Flex>

        </>
    )
}

export default EmailContact
