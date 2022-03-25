import { styled } from 'stitches.config'

const Bleed = styled('div', {
    variants: {
        type: {
            default: {
                margin: '0 -$4'
            },
        }
    },
    defaultVariants: {
        type: 'default'
    }
})

export default Bleed