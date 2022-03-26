import valueToLetter from 'src/valueToLetter'
import { Box, Bleed, Text, Flex } from '@/design-system/primitives'
import Body from '@/design-system/Body'
import type {Job} from 'contexts'
import {useRef, useEffect, useState} from 'react'

function twoDarray(arr:number[], totalPerArray:number):(number | undefined)[][] {
    let i = 0;
    let twoDimension = []; // Store the generated two D array
    let tempArr = [...arr]; // Avoid modifying original array
  
    while (i < arr.length) {
      let subArray = []; // Store 2D subArray
  
      for (var j = 0; j < totalPerArray; j++) {
        if (tempArr.length) subArray.push(tempArr.shift());
      }
  
      twoDimension[twoDimension.length] = subArray;
      i += totalPerArray;
    }
    return twoDimension;
  }

interface IDecoder {
    value?: Job,
}

const Decoder = ({value}:IDecoder) => {
    const container = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState<number>(0);

    const setContainerSize = () => {
        const cont = container.current;
        if(!cont) return;
        const {width} = cont.getBoundingClientRect();
        setSize(width);
    }

    useEffect(()=> {
        if(typeof window === 'undefined') return;
        const cont = container.current;
        if(!cont) return;
        const {width} = cont.getBoundingClientRect();
        setSize(width);
        window.addEventListener('resize',setContainerSize)
        return(()=>{
            window.removeEventListener('resize', setContainerSize)
        })
    },[])

    return (
        <Bleed type='default'>
            <Box position={'relative'}

             overflow={true}>
                <Box overflow={true} css={{ position: 'relative', zIndex: 10 }}>
                    <Body>
                        <Box px='4' py='4'
                            overflow={true}
                            ref={container}
                            borderRadius={'medium'}
                            css={{
                                background: 'linear-gradient(180deg, #161616 0%, rgba(0, 0, 0, 0) 100%), #000000',
                                boxShadow: '0px -9px 25px 2px rgba(190, 190, 190, 0.13), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px 2px 3px 1px rgba(255, 255, 255, 0.25)'
                            }}
                        >
                            <Flex ai='center' jc='center'>
                            <Box width='full'>
                            <Flex
                            direction='column'
                            gap='1'>
                                {value && value?.prevValue && twoDarray(value.prevValue, value?.resolution[0] || 24).map((row:(number | undefined)[], j) => {
                                   return (
                                       <Flex 
                                       key={j+'row'}
                                       gap='1'
                                       jc='spaceBetween'
                                       direction='row'>
                                            {row.map((x, i)=> {
                                                   const index =  (value?.resolution[0] || 24) * j + i;
                                            const letter = valueToLetter(x || 0)
                                            return <Box 
                                                key={i + 'letter'}
                                                css={{
                                                    display:'flex',
                                                    ai:'center',
                                                    mixBlendMode: value.publicSignals ? value.publicSignals[index] === '0' ? 'color' : 'normal' : 'normal',
                                                    jc:'center',
                                                    fontSize:'$p',
                                                    weight:'$max',
                                                    width:`${(size / value.resolution[0] || 24) - 8}px`,
                                                    height:`${(size / value.resolution[0] || 24) - 8}px`,
                                                    borderRadius:'$round',
                                                    backgroundColor: value.publicSignals ? value.publicSignals[index] === '0' ? 'red' : 'green' : 'gray',
                                
                                                    lineHeight: '0%'
                                                }}
                                            >
                                                <Text 
                                                color='text'
                                                css={{'@bp1':{display:'none'}, '@initial':{display:'inline-block'}}}>
                                                {letter === '*' ? ' ' : letter}
                                                </Text>
                                            </Box>
                                        })}
                                        </Flex>
                                   )
                                   
                                })}
                            </Flex>
                            </Box>
                            </Flex>
                        </Box>
                    </Body>
                </Box>

            </Box>
        </Bleed>
    )
}

export default Decoder 