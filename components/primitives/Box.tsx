import { styled, getVariant } from "stitches.config";

const Box = styled("div", {
    padding: 0,
    variants: {
        display: {
            grid: {
                display: 'grid',
            }
        },
        textAlign: {
            left: {
                textAlign: "left"
            },
            center: {
                textAlign: "center"
            },
            right: {
                textAlign: "right"
            },
        },
        position: {
            absolute: {
                position: "absolute",
            },
            relative: {
                position: "relative",
            },
            sticky: {
                position: "sticky",
            },
            fixed: {
                position: "fixed",
            },
        },
        zIndex: {
            "10": {
                zIndex: 10,
            },
            "20": {
                zIndex: 20,
            },
            "30": {
                zIndex: 30,
            },
            "40": {
                zIndex: 40,
            },
            "50": {
                zIndex: 50,
            },
            "60": {
                zIndex: 60,
            },
            "70": {
                zIndex: 70,
            },
            "80": {
                zIndex: 80,
            },
            "90": {
                zIndex: 90,
            },
            "100": {
                zIndex: 100,
            },
        },
        backdropFilter: {
            blur: {
                backdropFilter: "blur(3px)",
            },
            blur2x: {
                backdropFilter: "blur(6px)",
            }
        },
        order: {
            '0': {
                order: 0,
            },
            '1': {
                order: 1,
            },
            '2': {
                order: 2,
            },
            '3': {
                order: 3,
            },
            '4': {
                order: 4,
            },
        },
        opacity: {
            "0": {
                opacity: 0,
            },
            "0.1": {
                opacity: 0.1,
            },
            "0.2": {
                opacity: 0.2,
            },
            "0.3": {
                opacity: 0.3,
            },
            "0.4": {
                opacity: 0.4,
            },
            "0.5": {
                opacity: 0.5,
            },
            "0.6": {
                opacity: 0.6,
            },
            "0.7": {
                opacity: 0.7,
            },
            "0.8": {
                opacity: 0.8,
            },
            "0.9": {
                opacity: 0.9,
            },
            "1": {
                opacity: 1,
            },
        },
        top: getVariant('sizes', (tokenValue) => ({
            top: tokenValue,
        })),
        left: getVariant('sizes', (tokenValue) => ({
            left: tokenValue,
        })),
        bottom: getVariant('sizes', (tokenValue) => ({
            bottom: tokenValue,
        })),
        right: getVariant('sizes', (tokenValue) => ({
            right: tokenValue,
        })),
        width: getVariant('sizes', (tokenValue) => ({
            width: tokenValue,
        })),
        height: getVariant('sizes', (tokenValue) => ({
            height: tokenValue,
        })),
        maxHeight: getVariant('sizes', (tokenValue) => ({
            maxHeight: tokenValue,
        })),
        shadows: getVariant('shadows', (tokenValue) => ({
            boxShadow: tokenValue,
        })),
        p: getVariant('sizes', (tokenValue) => ({
            padding: tokenValue,
        })),
        px: getVariant('sizes', (tokenValue) => ({
            paddingLeft: tokenValue,
            paddingRight: tokenValue,
        })),
        py: getVariant('sizes', (tokenValue) => ({
            paddingTop: tokenValue,
            paddingBottom: tokenValue,
        })),
        pt: getVariant('sizes', (tokenValue) => ({
            paddingTop: tokenValue,
        })),
        pr: getVariant('sizes', (tokenValue) => ({
            paddingRight: tokenValue,
        })),
        pb: getVariant('sizes', (tokenValue) => ({
            paddingBottom: tokenValue,
        })),
        pl: getVariant('sizes', (tokenValue) => ({
            paddingLeft: tokenValue,
        })),
        m: getVariant('sizes', (tokenValue) => ({
            margin: tokenValue,
        })),
        ml: getVariant('sizes', (tokenValue) => ({
            marginLeft: tokenValue,
        })),
        mr: getVariant('sizes', (tokenValue) => ({
            marginRight: tokenValue,
        })),
        mt: getVariant('sizes', (tokenValue) => ({
            marginTop: tokenValue,
        })),
        mb: getVariant('sizes', (tokenValue) => ({
            marginBottom: tokenValue,
        })),
        mx: getVariant('sizes', (tokenValue) => ({
            marginLeft: tokenValue,
            marginRight: tokenValue,
        })),
        my: getVariant('sizes', (tokenValue) => ({
            marginTop: tokenValue,
            marginBottom: tokenValue,
        })),
        bc: getVariant('colors', (tokenValue) => ({
            background: tokenValue,
        })),
        overflow: {
            true: {
                overflow: 'visible',
            },
            false: {
                overflow: 'hidden',
            }
        },
        borderSize: {
            thin: {
                borderStyle: 'solid',
                borderWidth: "1px",
            },
            thick: {
                borderStyle: 'solid',
                borderWidth: "2px",
            },
        },
        borderColor: getVariant('colors', (tokenValue) => ({
            borderColor: tokenValue,
        })),
        borderRadius: {
            small: {
                br: "$1",
            },
            medium: {
                br: "$2",
            },
            large: {
                br: "$3",
            },
        },
    },
    defaultVariants: {
        p: "0",
        overflow: 'false'
    },
});
export default Box;