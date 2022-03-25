import { styled, getVariant } from "stitches.config";

const StyledButton = styled("button", {
    userSelect: "none",
    fontSize: "$6",
    width: "fit-content",
    display: "flex",
    cursor: "pointer",
    whiteSpace: "nowrap",
    variants: {
        padding:{
            big:{
                padding: "calc($1 * 0.5) $4",
            },
            small:{
                padding: "calc($1 * 0.5) $2",
            }
        },
        width: getVariant('sizes', (tokenValue) => ({
            width: tokenValue,
        })),
        ta: {
            center: {
                ta: "center",
            },
            left: {
                ta: "left",
            },
            right: {
                ta: "right",
            },
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
        look: {
            primary: {
                outline:'0px solid transparent',
                borderColor:'transparent',
                color: '$textForeground',
                borderRadius: '$round',
                background: '$backgroundSecondaory',
                boxShadow: 'inset 0px 1px 2px rgba(255, 255, 255, 0.16), inset 0px 0px 10px 5px #151718',
                '&:focus': {
                    // outlineColor: '$background',
                },
                "&:active": {

                },
                "&:hover": {
                    outline:'5px solid $foregroundSecondary'
                },
                "&:disabled": {
                },
            },
        },
        shape: {
            square: {
                aspectRatio: "1/1",
                padding:'$1',
                alignItems:'center',
                flexDirection:'row',
                display:'flex',
                justifyContent:'center'
            }
        }
    },
    defaultVariants: {
        look: "primary",
        ta: "center",
        padding:'big'
    },
});

export default StyledButton;