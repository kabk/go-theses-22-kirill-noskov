import { Box, Flex } from '@/design-system/primitives'

const Body = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
    return (
        <Box>
            <Flex ai='center' jc='center'>
                <Box width='28' css={{ wordBreak: 'break-word', hyphens: 'auto' }}>
                    <Flex direction='column' gap='2'>
                        {children}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default Body 