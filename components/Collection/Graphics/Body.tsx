import React from "react";

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="87"
            fill="none"
            viewBox="0 0 69 87"
        >
            <g filter="url(#filter0_ii_224_2340)">
                <rect
                    width="67.942"
                    height="86"
                    x="0.871"
                    y="0.379"
                    fill="#3A3A3A"
                    rx="16"
                ></rect>
            </g>
            <defs>
                <filter
                    id="filter0_ii_224_2340"
                    width="67.942"
                    height="87"
                    x="0.871"
                    y="0.379"
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
                    <feMorphology
                        in="SourceAlpha"
                        radius="5"
                        result="effect1_innerShadow_224_2340"
                    ></feMorphology>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0.0823529 0 0 0 0 0.0901961 0 0 0 0 0.0941176 0 0 0 1 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_224_2340"></feBlend>
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
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0"></feColorMatrix>
                    <feBlend
                        in2="effect1_innerShadow_224_2340"
                        result="effect2_innerShadow_224_2340"
                    ></feBlend>
                </filter>
            </defs>
        </svg>
    );
}

export default Icon;