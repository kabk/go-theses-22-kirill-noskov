import useDecoder from './useDecoder.hook'
import {Box, Flex, Heading, Paragraph} from '@/design-system/primitives'
import Decoder from './Decoder'
import Introduction from './Introduction'
import type {Job} from 'contexts'

interface IRoot {
    jobName: string
    index: number
    quantity: string
    name: string
    description:string
}

const Root = ({jobName, index, quantity, name, description}:IRoot) => {
    const { resumeJob, pauseJob, activeJobs, changeStrategy } = useDecoder(jobName)
     //button handler 
     const StartJob = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log('start job')
        resumeJob(jobName)
    }

    const PauseJob = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log('pause job')
        pauseJob(jobName)
    }

    const ChangeStrategy = (newStrategy:Job['strategy']) => {
        console.log('change strategy')
        changeStrategy(jobName, newStrategy)
    }

    return(
        <Box 
        mt='6'
        mb='6'
        py='4'>
            <Flex direction='row' gap='4' css={{'@bp1':{flexDirection:'column'},'@bp2':{flexDirection:'column'}, '@bp3':{flexDirection:'row'}}}>
            <Flex direction='column' gap='4' css={{'@bp3':{order:2},'@bp2':{order:0}, '@bp1':{order:0}}}>
            <Box px={3}>
                <Flex direction='column' gap='3'>
                    <Flex direction='row' gap='2'>
                        <Heading color='text' size='3'>
                            Artifact {index}
                        </Heading>
                        <Heading
                            size='3'
                            color='textForeground'>
                            {name}
                        </Heading>
                    </Flex>
                    <Flex direction='row' gap='2'>
                        <Paragraph color='text'>
                            {quantity}/14 minted
                        </Paragraph>
                        <Paragraph color='textForeground'>
                           {description}
                        </Paragraph>
                    </Flex>
                </Flex>
            </Box>
            <Box px={3}>
            <Introduction
            index={index}
            isActive={ activeJobs.find((item) => item.id === jobName)?.isActive || false}
            start={StartJob}
            pause={PauseJob}
            strategy={ activeJobs.find((item) => item.id === jobName)?.strategy || 'default'}
            change={ChangeStrategy}
            />
            </Box>
            </Flex>
            <Box position='relative' overflow>
            <Box position='absolute' left='0' top='0'
            
            >

            </Box>
           
            <Decoder
            value={ activeJobs.find((item) => item.id === jobName)}
            />
         
             </Box>
             </Flex>
            
        </Box>
    )
}

export default Root