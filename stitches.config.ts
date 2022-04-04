import { createStitches } from "@stitches/react";
import type * as Stitches from '@stitches/react';



export const getVariant = <
    P extends keyof typeof config.theme,
    T extends keyof typeof config.theme[P],
    //@ts-ignore
    R extends Record<`${T}`, CSS>,
    >(
        prop: P,
        //@ts-ignore
        map: (tokenValue: `${T}`) => CSS,
): R => {
    const values = Object.keys(config.theme[prop] as keyof typeof config.theme[P]) as T[];
    return values.reduce<R>(
        //@ts-ignore
        (acc, tokenValue) => ({ ...acc, [tokenValue]: map(`$${tokenValue}`) }),
        {} as R,
    );
};

const Filters = {
    blur: (enable: boolean) => ({
        filter: enable && `blur(2px)`,
    }),
    dropShadow: (enable: boolean) => ({
        filter: enable && `drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.2))`
    }),
}


const Borders = {
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
        borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
        borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
        borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
        borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
        borderTopLeftRadius: value,
    }),
}

const Backgrounds = {
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
    }),

}

const Sizes = {
    size: (value: Stitches.ScaleValue<'space'>) => ({
        width: value,
        height: value,
    }),
}

const Padding = {
    p: (value: Stitches.ScaleValue<'space'>) => ({
        padding: value,
    }),
    pt: (value: Stitches.ScaleValue<'space'>) => ({
        paddingTop: value,
    }),
    pr: (value: Stitches.ScaleValue<'space'>) => ({
        paddingRight: value,
    }),
    pb: (value: Stitches.ScaleValue<'space'>) => ({
        paddingBottom: value,
    }),
    pl: (value: Stitches.ScaleValue<'space'>) => ({
        paddingLeft: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
        paddingLeft: value,
        paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
        paddingTop: value,
        paddingBottom: value,
    }),
}

const Margin = {
    m: (value: Stitches.ScaleValue<'space'>) => ({
        margin: value,
    }),
    mt: (value: Stitches.ScaleValue<'space'>) => ({
        marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<'space'>) => ({
        marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<'space'>) => ({
        marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<'space'>) => ({
        marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
        marginLeft: value,
        marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
        marginTop: value,
        marginBottom: value,
    }),
}

const Events = {
    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        userSelect: value,
    }),
    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        userSelect: value,
    }),
}

const FlexBox = {
    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),
}

const Text = {
    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),
}

const Rest = {
    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),
    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),
    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),
    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
        WebkitAppearance: value,
        appearance: value,
    }),

}

const utils = { ...Margin, ...Padding, ...Sizes, ...Backgrounds, ...Borders, ...Events, ...FlexBox, ...Text, ...Rest, ...Filters }


export const { styled, css, globalCss, getCssText, keyframes, createTheme, config } = createStitches({
    theme: {
        colors: {
            background: '#151718',
            backgroundSecondaory: '#3A3A3A',
            foreground: 'rgba(26, 29, 30, 1)',
            foregroundTranslucent: 'rgba(26, 29, 30, 0.8)',
            text: '#FFFFFF',
            textForeground: '#697177',
            foregroundSecondary: '#26292B',
            foregroundTerciary: '#BCBEBE',
            green: '#164430',
            greenLight: '#3CB179'
        },
        space: {
            0: "0px",
            1: "4px",
            2: "8px",
            3:'16px',
            4: "24px",
            5: "32px",
            6: "48px",
            7: "64px",
            8: "96px",
            9: "128px",
        },
        fontSizes: {
            7: "12px",
            6: "0.8rem",
            5: "1.25rem",
            4: "1.563rem",
            3: "1.953rem",
            2: "2.441rem",
            1: "3.052rem",
            p: "1rem",
        },
        fonts: {
            default: "San Francisco, Helvetica, Arial, sans-serif"
        },
        fontWeights: {
            min: 100,
            max: 600,
        },
        lineHeights: {
            1: "125%",
            2: "120%",
            3: "96%",
            4: "102%",
            5: "102%",
            6: "98%",
            p: "156%;",
        },
        letterSpacings: {},
        sizes: {
            0: "4px",
            1: "8px",
            2: "16px",
            3: "24px",
            4: "32px",
            5: "48px",
            6: "96px",
            7: "124px",
            8: "152px",
            9: "180px",
            10: "208px",
            11: "236px",
            12: "264px",
            13: "292px",
            14: "320px",
            15: "348px",
            16: "376px",
            17: "404px",
            18: "432px",
            19: "460px",
            20: "488px",
            21: "516px",
            22: "544px",
            23: "572px",
            24: "600px",
            25: "628px",
            26: "656px",
            27: "684px",
            28: "712px",
            29: "740px",
            30: "768px",
            31: "796px",
            32: "824px",
            'full': '100%',
            'fit': 'fit-content',
            'body': '1152px'
        },
        borderWidths: {},
        borderStyles: {},
        radii: {
            1: "4px",
            2: "8px",
            round: "9999px",
        },
        shadows: {
            default: `0px 4px 2px 2px rgba(0, 0, 0, 0.2)`,
        },
        zIndices: {},
        transitions: {
            fontWeight: '.45s ease-out',
            all: "all 0.8s ease-out",
            color: "color 0.8s ease-out",
            background: "background 0.8s ease-out, color 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        },
    },
    utils,
    media: {
        dark: "(prefers-color-scheme: dark)",
        light: '(prefers-color-scheme: light)',
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        bp1: "(width < 720px)",
        bp2: "(720px <= width < 1024px)",
        bp3: "(1024px <= width)",
    },
});


export type CSS = Stitches.CSS<typeof config>;
export type { VariantProps } from '@stitches/react';




//font weights are from 300—900 
export const globalStyles = globalCss({
    '*, *::before, *::after': {
        boxSizing: 'border-box'
    },
    "*": {
        color:'$textForeground',
        margin: 0,
        padding: 0,
        fontSize: "16px",
        fontWeight: '100',
        fontFamily: 'Monument, Helvetica, Arial, sans-serif',
        '::selection': {
            background: '$foregroundTerciary',
        }
    },
    'input, button, textarea, select': {
        font: 'inherit'
    },
    'img, picture, video, canvas': {
        display: 'block',
        maxWidth: '100%'
    },
    'p, h1, h2, h3, h4, h5, h6, strong, b, i': {
        overflowWrap: 'break-word',
        fontKerning: 'normal',
        fontFeatureSettings: `"kern" 1, "liga" 1, "calt" 0, "kern"`,
        fontStretch: 'semi-condensed',
        fontOpticalSizing: 'auto',
        WebkitFontSmoothing: 'antialiased',
    },
    '#root, #__next': {
        isolation: 'isolate'
    },
    "body": { background: '$background' },
    "body, html, #__next": { minHeight: "100%", height: "100%" },
    h1: { fontSize: "$1", fontFamily: 'Monument, Helvetica, Arial, sans-serif', },
    h2: { fontSize: "$2", fontFamily: 'Monument, Helvetica, Arial, sans-serif', },
    h3: { fontSize: "$3", fontFamily: 'Monument, Helvetica, Arial, sans-serif', },
    h4: { fontSize: "$4", fontFamily: 'Monument, Helvetica, Arial, sans-serif', },
    h5: { fontSize: "$5", fontFamily: 'Monument, Helvetica, Arial, sans-serif', },
    p: { fontSize: "$p" },
    span: { fontSize: "$p" },
    b: {
        fontWeight: "$max",
        fontSize: 'inherit'
    },
    i: {
        fontSize: 'inherit'
    },
    strong: {
        fontWeight: "$max",
        fontSize: 'inherit'
    },
    hr: {
        border: 0,
        height: "1px",
        margin: "0",
        padding: "0",
    },
    a: {
        color: '$text'
    },
    "@font-face": [
        {
            fontFamily: "Monument",
            fontWeight: "300",
            src: 'local("MonumentGrotesk-Medium"), url("/fonts/MonumentGrotesk-Medium.woff2")',
        },
        {
            fontFamily: "Monument",
            fontWeight: "100",
            src: 'local("MonumentGrotesk-Regular"), url("/fonts/MonumentGrotesk-Regular.woff2")',
        },
    ],
});


export const slideMenuShow = keyframes({
    from: {
        transform: 'translateX(100%)',
    },
    to: {
        transform: 'translateX(0%)',
    },
});


export const hide = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
});

export const slideIn = keyframes({
    from: { transform: `translateX(calc(100% + ${32}px))` },
    to: { transform: 'translateX(0)' },
});

export const swipeOut = keyframes({
    from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
    to: { transform: `translateX(calc(100% + ${32}px))` },
});

export const dialogShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(1.1)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)', }
})

export const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 0.65 },
});

export const searchShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, 0%) scale(1.1)' },
    '100%': { opacity: 1, transform: 'translate(-50%, 0%) scale(1)', }
})

export const contentShow = keyframes({
    '0%': { opacity: 0, transform: `translate(0 %, -100 %)` },
    '100%': { opacity: 1, transform: `translate(0 %, 0 %)` }
})