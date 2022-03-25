import React from "react";

function Icon({ isActive = false }: { isActive?: boolean }) {
    if (isActive) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="49"
                fill="none"
                viewBox="0 0 48 49"
            >
                <circle
                    cx="24.033"
                    cy="24.379"
                    r="23.729"
                    fill="url(#paint0_radial_224_2373)"
                ></circle>
                <g filter="url(#filter0_i_224_2373)">
                    <circle
                        cx="24.034"
                        cy="24.38"
                        r="19.646"
                        fill="url(#paint1_linear_224_2373)"
                    ></circle>
                </g>
                <defs>
                    <filter
                        id="filter0_i_224_2373"
                        width="39.292"
                        height="40.292"
                        x="4.388"
                        y="4.733"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        ></feBlend>
                        <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
                        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                        <feComposite
                            in2="hardAlpha"
                            k2="-1"
                            k3="1"
                            operator="arithmetic"
                        ></feComposite>
                        <feColorMatrix values="0 0 0 0 0.0823529 0 0 0 0 0.0901961 0 0 0 0 0.0941176 0 0 0 0.5 0"></feColorMatrix>
                        <feBlend in2="shape" result="effect1_innerShadow_224_2373"></feBlend>
                    </filter>
                    <radialGradient
                        id="paint0_radial_224_2373"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(90 -.173 24.206) scale(23.7285)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#C4C4C4"></stop>
                        <stop offset="0.146" stopColor="#AAAEB1"></stop>
                        <stop offset="0.526" stopColor="#9BA1A6"></stop>
                        <stop offset="0.964" stopColor="#AAAEB1"></stop>
                        <stop offset="1" stopColor="#151718" stopOpacity="0.22"></stop>
                    </radialGradient>
                    <linearGradient
                        id="paint1_linear_224_2373"
                        x1="24.034"
                        x2="24.034"
                        y1="4.733"
                        y2="50.535"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#C4C4C4"></stop>
                        <stop offset="1" stopColor="#C4C4C4" stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>

        )
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="49"
            fill="none"
            viewBox="0 0 48 49"
        >
            <circle
                cx="23.842"
                cy="24.379"
                r="23.729"
                fill="url(#paint0_radial_224_2376)"
            ></circle>
            <g filter="url(#filter0_i_224_2376)">
                <circle
                    cx="23.842"
                    cy="24.38"
                    r="19.646"
                    fill="url(#paint1_linear_224_2376)"
                ></circle>
            </g>
            <defs>
                <filter
                    id="filter0_i_224_2376"
                    width="39.292"
                    height="40.292"
                    x="4.196"
                    y="4.733"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0.0823529 0 0 0 0 0.0901961 0 0 0 0 0.0941176 0 0 0 0.5 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_224_2376"></feBlend>
                </filter>
                <radialGradient
                    id="paint0_radial_224_2376"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(90 -.269 24.11) scale(23.7285)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#151718"></stop>
                    <stop offset="0.146" stopColor="#697177"></stop>
                    <stop offset="0.943" stopColor="#4C5155"></stop>
                    <stop offset="1" stopColor="#151718" stopOpacity="0.94"></stop>
                </radialGradient>
                <linearGradient
                    id="paint1_linear_224_2376"
                    x1="23.842"
                    x2="23.842"
                    y1="4.733"
                    y2="50.535"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2D2E2F"></stop>
                    <stop offset="1" stopColor="#363636"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
}

export default Icon;