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
        <Box py='4'>
            <Flex direction='column' gap='2'>
            <Box>
                <Flex direction='column' gap='2'>
                    <Flex direction='row' gap='1'>
                        <Heading color='text' size='3'>
                            Artifact {index}
                        </Heading>
                        <Heading
                            size='3'
                            color='textForeground'>
                            {name}
                        </Heading>
                    </Flex>
                    <Flex direction='row' gap='1'>
                        <Paragraph color='text'>
                            {quantity}/14 minted
                        </Paragraph>
                        <Paragraph color='textForeground'>
                           {description}
                        </Paragraph>
                    </Flex>
                </Flex>
            </Box>
            <Introduction
            isActive={ activeJobs.find((item) => item.id === jobName)?.isActive || false}
            start={StartJob}
            pause={PauseJob}
            strategy={ activeJobs.find((item) => item.id === jobName)?.strategy || 'default'}
            change={ChangeStrategy}
            />
            <Decoder
            value={ activeJobs.find((item) => item.id === jobName)}
            />
            </Flex>
        </Box>
    )
}

export default Root