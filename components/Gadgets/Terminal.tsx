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
        // <Portal.Root>
            <Box 
            width={'12'}
            height={'fit'}
            css={{zIndex:10000000}}
            px='2'
            py='1'
            borderRadius={'medium'}
            bc='foregroundSecondary'
            // position='fixed'
            // right='2'
            // bottom='2'
            >
                <Box width='full'>
                    <Flex direction='row' jc='spaceBetween'  ai='center'>
                    <Paragraph color='textForeground'>
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
                                  <Paragraph color='text'>
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
        // </Portal.Root>
    )
}

export default Terminal