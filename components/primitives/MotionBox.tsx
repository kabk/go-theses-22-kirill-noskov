import Box from './Box'
import {motion} from 'framer-motion'
import { forwardRef } from 'react'
import { VariantProps } from 'stitches.config';
import React from 'react'


const MotionBox = forwardRef((props:VariantProps<typeof Box> & {children:React.ReactNode | React.ReactNode[]}, ref:any) => (
    <Box ref={ref} {...props}/>
))


MotionBox.displayName = 'MotionBox'

const MotionComponent = motion(MotionBox)


export default MotionComponent