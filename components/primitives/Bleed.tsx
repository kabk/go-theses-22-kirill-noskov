import { styled } from 'stitches.config'

const Bleed = styled('div', {
    variants: {
        type: {
            default: {
                margin: '0 -$4',
                '@bp1':{
                    margin: '0',
                }
            },
        }
    },
    defaultVariants: {
        type: 'default'
    }
})

export default Bleed