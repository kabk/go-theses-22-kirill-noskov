import {Box, MotionBox, Paragraph, Button, Flex} from '@/design-system/primitives'
import {useRecoilTransactionObserver_UNSTABLE} from 'recoil'
import { useState, useEffect } from 'react';
import PlusIcon from '@/design-system/icons/Plus'
import MinusIcon from '@/design-system/icons/Minus'
import {useAnimation, AnimatePresence} from 'framer-motion'

type Debug = {
    key: string,
    snapshot: {
        contents: any[]
    }
}
const Terminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<Debug[]>([])
    const controls = useAnimation()


    useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
        for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
            setValue((prevValue) => {
                const newValue = [...prevValue]
                newValue.push({
                    key: node.key,
                    //@ts-ignore-next-line
                    snapshot: snapshot.getLoadable(node) 
                })
                return newValue
            })
            key: node.key,
            console.debug(node.key, snapshot.getLoadable(node));
          }
    });

    useEffect(()=>{
        if(!isOpen){
        controls.start(() => ({
            opacity: 0.9,
            zIndex:100000,
            y: [100, 0],
            left:'50%',
            x: '-50%',
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.5
            },
          }))
        }
    },[value])

    return(
            <MotionBox
            initial={{y:0, x: '-50%', left:'50%', opacity: 0}}
            animate={controls}
            width={{'@initial':'24', '@bp1':'full'}}
            position='fixed'
            bottom={4}
            px='2'
            height={'fit'}
            >
            <Box 

         
            pt='2'
            borderRadius={'medium'}
            bc='foregroundSecondary'
            >
                <Box width='full'
                   px='2'
                   pb='2'
                css={{
                    boxShadow: '0px 25px 15px rgba(0,0,0,0.1)',
                }}
                >
                    <Flex direction='row' jc='spaceBetween'  ai='center'>
                    <Flex gap='2'>
                    <Paragraph 
                    size={"7"}
                    color='textForeground'>
                    TERMINAL
                    </Paragraph>
                    <Paragraph 
                    size={"7"}
                    color='textForeground'>
                    {value.length}
                    </Paragraph>
                    </Flex>
                    <Button 
                    padding='small'
                    shape={'square'}
                    onClick={()=>setIsOpen(!isOpen)}
                    >
                        {isOpen 
                        ? <MinusIcon/>
                        :< PlusIcon/>
                        }
                    </Button>
                    </Flex>
                </Box>
                  <AnimatePresence>

                {isOpen && (
                    <MotionBox width='full' 
                    px='4'
                    initial={{
                        opacity:0,
                        height:0,
                    }}
                    animate={{
                        opacity:1,
                        height:'100%',
                        transition: {
                            duration: 0.75,
                            ease: 'easeInOut',
                        },
                    }}
                    exit={{ opacity:0,
                        height:0,
                        maxHeight:0,
                    }}
                    pt='2'
                    maxHeight={'16'}
                    //ts-ignore-next-line
                    height='full' 
                     //ts-ignore-next-line
                    css={{overflow:'scroll'}}>
                        <Flex direction='column' gap='2'>
                            {value.length === 0 && (
                                  <Paragraph size={'7'}  css={{pb:'$2'}}color='textForeground'>
                                 Nothing here yet
                              </Paragraph>
                            )}
                            {value.map((debug, index)=>{
                                return(
                                    <Flex direction='row' gap='2' key={'atom' + index + debug.key}>
                                    
                                        <Paragraph color='text'>
                                        {debug.snapshot.contents[0].id}
                                        </Paragraph>

                                     <Box pl='2' width='full'>
                                        <Flex direction='column' gap='2'>
                                        <Paragraph                     
                                        color='textForeground' css={{
                                            wordBreak: 'break-word'
                                        }}>
                                            <b>isActive:</b> {debug.snapshot.contents[0].isActive.toString()}
                                    </Paragraph>  
                                    <Paragraph                     
                                        color='textForeground' css={{
                                            wordBreak: 'break-word'
                                        }}>
                                            <b>isActivated:</b> {debug.snapshot.contents[0].isActivated.toString()}
                                        </Paragraph>
                                        <Paragraph                     
                                        color='textForeground' css={{
                                            wordBreak: 'break-word'
                                        }}>
                                            <b>isComplete:</b> {debug.snapshot.contents[0].isComplete.toString()}
                                        </Paragraph>
                                        <Paragraph                     
                                        color='textForeground' css={{
                                            wordBreak: 'break-word'
                                        }}>
                                            <b>resolution:</b> {debug.snapshot.contents[0].resolution.toString()}
                                        </Paragraph>
                                        <Paragraph                     
                                        color='textForeground' css={{
                                            wordBreak: 'break-word'
                                        }}>
                                           <b>strategy:</b>  {debug.snapshot.contents[0].strategy}
                                        </Paragraph>
                                        <Paragraph                     
                                        color='textForeground' css={{
                                            wordBreak: 'break-word'
                                        }}>
                                            <b>lastValue:</b> {debug.snapshot.contents[0].lastValue}
                                        </Paragraph>
                                            </Flex>
                                    </Box>
                               
                                          
                                    </Flex>
                                )
                            })}
                         
                        </Flex>
                    </MotionBox>
                )}
                </AnimatePresence>
            </Box>
            </MotionBox>
        // </Portal.Root>
    )
}

export default Terminal