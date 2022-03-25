import { Box, Paragraph, Button, Flex } from '@/design-system/primitives'
import type {Job} from 'contexts'
interface IIntroduction {
    isActive: boolean,
    start: (e: React.SyntheticEvent) => void,
    pause: (e: React.SyntheticEvent) => void,
    change: (newStrategy:Job['strategy']) => void,
    strategy: Job['strategy']
}


const Introduction = ({start, pause, strategy, change, isActive}:IIntroduction) => {
    return (
        <Box borderRadius='medium'
            p='2'
            bc='foreground'
        >
            <Flex direction='column' gap='2'>
                <Paragraph color='textForeground'>
                    You&apos;ve stumbled upon your first artifact&thinsp;—&thinsp;to reveal it you have to perform a calculation to obtain a proof. Once the calculation is complete&thinsp;—&thinsp;you can exchange your proof for an unique NFT on Ethereum blockchain. There are only 14 of them for each artifact.
                </Paragraph>
                <Flex direction='row' gap='2' jc='spaceBetween'>
                <Button onClick={(e)=>{
                    if(isActive){
                        pause(e)
                    } else {
                        start(e)
                    }
                }}>
                    {isActive ? 'Pause mining' : 'Start mining'}
                </Button>
                <Flex direction='row' gap='1' jc='start'>
                <Button
                padding='small'
                disabled={strategy === 'default' ? true : false}
                onClick={()=>change('default')}>
                    step-by-step
                </Button>
                <Button 
                  padding='small'
                    disabled={strategy === 'all' ? true : false}
                onClick={()=>change('all')}>
                    all 
                </Button>

                </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Introduction