import { styled, getVariant } from 'stitches.config'

const Heading = styled('h1', {
    fontWeight: '$max',
    color: '$text',
    variants: {
        size: {
            '1': {
                fontSize: '$1',
                lineHeight: '$1',
                '@bp1': {
                    fontSize: '$3'
                }
            },
            '2': {
                fontSize: '$2',
                lineHeight: '$2',
                '@bp1': {
                    fontSize: '$3'
                }
            },
            '3': {
                fontSize: '$3',
                lineHeight: '$3',
            },
            '4': {
                fontSize: '$4',
                lineHeight: '$4',
            },
            '5': {
                fontSize: '$5',
                lineHeight: '$5',
            }
        },
        m: getVariant('sizes', (tokenValue) => ({
            margin: tokenValue,
        })),
        mx: getVariant('sizes', (tokenValue) => ({
            marginLeft: tokenValue,
            marginRight: tokenValue,
        })),
        my: getVariant('sizes', (tokenValue) => ({
            marginTop: tokenValue,
            marginBottom: tokenValue,
        })),
        weight: getVariant('fontWeights', (tokenValue) => ({
            fontWeight: tokenValue,
        })),
        color: getVariant('colors', (tokenValue) => ({
            color: tokenValue,
        })),
        highlighted: {
            true: {
                bc: '$highlight',
                lineHeight: '120%',
                color: '$text',
            },
        }
    },
    defaultVariants: {
        size: '5',
        color: 'text',
        weight: 'max'
    }
})


export default Heading