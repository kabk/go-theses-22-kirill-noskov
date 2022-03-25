import { Box, Paragraph, Flex } from '@/design-system/primitives'
import Body from './Graphics/Body'
import Ring from './Graphics/Ring'

const Collection = () => {

    const Item =
        <Box position='relative' css={{
            transformOrigin: 'center',
            width: 'fit', height: '86px',
            '@bp2': {
                transform: 'rotate(-90deg)',
            },
            '@bp1': {
                transform: 'rotate(-90deg)',
            },
        }}>
            <Flex ai='center' jc='center' css={{ height: '100%' }}>
                <Box zIndex='10'><Ring /></Box>
                <Box position='absolute'
                    left='0'
                    top='0'
                >
                    <Body />
                </Box>
            </Flex>
        </Box>

    return (
        <Box
            order={{ '@initial': '0', '@bp1': '1', '@bp2': '1' }}
            p='2'
            width={{ '@initial': '9', '@bp1': 'fit', '@bp2': 'full' }}
            textAlign={'center'}
            height='fit'
            bc='foreground'
            borderRadius={'medium'}
        >
            <Flex direction={{ '@initial': 'column', '@bp2': 'row', '@bp1': 'row' }} gap='2'>
                <Paragraph
                    css={{
                        '@bp2': {
                            writingMode: 'vertical-lr'
                        },
                        '@bp1': {
                            writingMode: 'vertical-rl'
                        }
                    }}
                    color='textForeground'>
                    Your collection
                </Paragraph>
                <Box
                    display="grid"
                    width='full'
                    css={{
                        flexGrow: '1',
                        flexBasis: 'auto',
                        gridTemplateColumns: 'repeat(2, minmax(69px, 1fr))',
                        gap: '$1',
                        '@bp1': {
                            gridTemplateColumns: 'repeat(3, 86px)',
                        },
                        '@bp2': {
                            gridTemplateColumns: 'repeat(3, 86px)',
                        }
                    }}
                >
                    {Item} {Item}
                    {Item} {Item}
                    {Item} {Item}
                </Box>
            </Flex >
        </Box>

    )
}

export default Collection