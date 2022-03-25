import valueToLetter from 'src/valueToLetter'
import { Paragraph, Box, Bleed, Button } from '@/design-system/primitives'
import Body from '@/design-system/Body'
import type {Job} from 'contexts'
import {useEffect, useState} from 'react'

interface IDecoder {
    value?: Job,
}

const Decoder = ({value}:IDecoder) => {

    useEffect(()=>{
        console.log('value updated', value)
    }, [value])

    return (
        <Bleed type='default'>
            <Box position={'relative'} overflow={true}>

                <Box overflow={true} css={{ position: 'relative', zIndex: 10 }}>
                    <Body>
                        <Box px='1' py='2'
                            overflow={true}
                            borderRadius={'medium'}
                            css={{
                                background: 'linear-gradient(180deg, #161616 0%, rgba(0, 0, 0, 0) 100%), #000000',
                                boxShadow: '0px -9px 25px 2px rgba(190, 190, 190, 0.13), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px 2px 3px 1px rgba(255, 255, 255, 0.25)'
                            }}
                        >
                            <Paragraph>
                                {value && value.prevValue?.map((x, i) => {
                                    return <Box as='span'
                                        key={i + 'letter'}
                                        css={{
                                            color: value.publicSignals ? value.publicSignals[i] === '0' ? 'red' : 'green' : 'white',
                                            fontSize: 'inherit',
                                            lineHeight: 'inherit'
                                        }}
                                    >
                                        {valueToLetter(x)}
                                    </Box>
                                })}
                            </Paragraph>
                        </Box>
                    </Body>
                </Box>

            </Box>
        </Bleed>
    )
}

export default Decoder 