import {Box, Paragraph, Button, Flex} from '@/design-system/primitives'
import {useRecoilTransactionObserver_UNSTABLE} from 'recoil'
import { useState } from 'react';
import PlusIcon from '@/design-system/icons/Plus'
import MinusIcon from '@/design-system/icons/Minus'

type Debug = {
    key: string,
    snapshot: {
        contents: any[]
    }
}
const Terminal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [value, setValue] = useState<Debug[]>([])
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
    return(
            <Box
            width={{'@initial':'24', '@bp1':'full'}}
            position='fixed'
            bottom={4}
            px='2'
            height={'fit'}
            css={{zIndex:10000000, left:'50%',
            // outline:'5px solid $foregroundTerciary',
            transform:'translateX(-50%)'}}
            >
            <Box 

            px='2'
            py='2'
            borderRadius={'medium'}
            bc='foregroundSecondary'
            >
                <Box width='full'>
                    <Flex direction='row' jc='spaceBetween'  ai='center'>
                    <Paragraph 
                    size={"7"}
                    color='textForeground'>
                    TERMINAL
                    </Paragraph>
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
                {isOpen && (
                    <Box width='full' 
                    pt='2'
                    maxHeight={'16'}
                    height='full' css={{overflow:'scroll'}}>
                        <Flex direction='column' gap='1'>
                            {value.length === 0 && (
                                  <Paragraph size={'7'} color='text'>
                                 Nothing here yet
                              </Paragraph>
                            )}
                            {value.map((debug, index)=>{
                                return(
                                    <Flex direction='row'
                                    key={'atom' + index + debug.key}
                                    >
                                        <Paragraph color='text'>
                                            {debug.key}
                                        </Paragraph>
                                        <Paragraph                     
                                        color='textForeground' css={{
                                            wordBreak: 'break-word'
                                        }}>
                                            {JSON.stringify(
                                                debug.snapshot.contents
                                            )}
                                         
                                        </Paragraph>    
                                    </Flex>
                                )
                            })}
                         
                        </Flex>
                    </Box>
                )}
            </Box>
            </Box>
        // </Portal.Root>
    )
}

export default Terminal