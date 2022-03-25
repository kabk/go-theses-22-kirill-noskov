import { styled } from 'stitches.config'
import { getVariant } from 'stitches.config'


const Flex = styled('div', {
    boxSizing: 'border-box',
    display: 'flex',
    width: 'auto',
    height: 'auto',
    variants: {
        width: getVariant('sizes', (tokenValue) => ({
            width: tokenValue,
        })),
        direction: {
            row: {
                flexDirection: 'row',
            },
            column: {
                flexDirection: 'column',
            },
            rowReverse: {
                flexDirection: 'row-reverse',
            },
            columnReverse: {
                flexDirection: 'column-reverse',
            }
        },
        ai: {
            center: {
                ai: "center",
            },
            end: {
                ai: "flex-end",
            },
            start: {
                ai: "flex-start",
            },
            stretch: {
                ai: "stretch",
            },
            baseline: {
                ai: "baseline",
            },
        },
        jc: {
            center: {
                jc: "center",
            },
            end: {
                jc: "flex-end",
            },
            start: {
                jc: "flex-start",
            },
            spaceBetween: {
                jc: "space-between",
            },
        },
        wrap: {
            noWrap: {
                flexWrap: 'nowrap',
            },
            wrap: {
                flexWrap: 'wrap',
            },
            wrapReverse: {
                flexWrap: 'wrap-reverse',
            },
        },
        gap: getVariant('sizes', (tokenValue) => ({
            gap: tokenValue,
        })),
    },
    defaultVariants: {
        direction: 'row',
        ai: 'stretch',
        jc: 'start',
        wrap: 'noWrap',
    }
});


export default Flex