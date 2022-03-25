import { styled } from 'stitches.config'
import { getVariant } from 'stitches.config'

const Text = styled('span', {
    // Reset
    lineHeight: '1',
    margin: '0',
    fontWeight: 400,
    display: 'block',
    variants: {
        weight: getVariant('fontWeights', (tokenValue) => ({
            fontWeight: tokenValue,
        })),
        color: getVariant('colors', (tokenValue) => ({
            color: tokenValue,
        })),
        size: getVariant('fontSizes', (tokenValue) => ({
            fontSize: tokenValue,
        })),
        gradient: {
            true: {
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            },
        },

        highlighted: {
            true: {
                bc: '$highlight',
                p: '$1',
                color: '$text',
            },
        }
    },
    defaultVariants: {
        size: 'p',
        color:'textForeground'
    },
});

export default Text