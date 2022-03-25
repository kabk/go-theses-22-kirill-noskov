import { styled } from 'stitches.config'
import { Paragraph, Text, Box, Flex, Bleed, Button } from '@/design-system/primitives'
import { Terminal } from '@/design-system/Gadgets'

import { useBlockNumber } from 'wagmi'
import useHardwareDetails from './useHardwareDetails.hook'
import { useRecoilState } from 'recoil'
//state
import { jobs } from 'contexts'

const StyledMiningStatus = styled('div', {
    width: '$4',
    height: '$4',
    borderRadius: '$round',
    variants: {
        active: {
            true: {
                background: 'radial-gradient(50% 50% at 50% 50%, #164430 0%, #3CB179 100%)',
                boxShadow: 'inset 0px 6px 2px 1px #4CC38A;',
                filter: 'blur(7px)'
            },
            false: {
                background: 'radial-gradient(50% 50% at 50% 50%, #7F2315 0%, #E54D2E 100%)',
                boxShadow: 'inset 0px 6px 2px 1px #F16A50',
                filter: 'blur(7px)'
            }
        }
    },
    defaultVariants: {
        active: false
    }
})


const Header = () => {

    const [activeJobs, setActiveJobs] = useRecoilState(jobs)

    const [{ data: dataBlock }] = useBlockNumber({
        watch: true
    })
    const details = useHardwareDetails()


    const BlockStatus = <Box></Box>
    const BlockText = <Box><Paragraph color='text'>Block</Paragraph><Paragraph color='textForeground'>{dataBlock || '0000000'}</Paragraph></Box>
    const Block = <Flex direction='row' gap='2'>{BlockText}{BlockStatus}</Flex>

    const MiningStatus = <StyledMiningStatus active={
        activeJobs.find((item) => item.isActive === true) ? true : false
    } />
    const MiningText = <Box><Paragraph color='text'>Mining</Paragraph><Paragraph color='textForeground'>{
        activeJobs.find((item) => item.isActive === true) ? 'In Progress' : 'No active jobs'
    }
        </Paragraph></Box>
    const Mining = <Flex direction='row' gap='2' ai='center'>{MiningText}{MiningStatus}</Flex>

    const PauseJob = (jobName:string) => {
        setActiveJobs(activeJobs.map(j => j.id === jobName ? { ...j, isActive: false } : j))
    }

    const ResumeJob = (jobName:string) => {
        setActiveJobs(activeJobs.map(j => j.id === jobName ? { ...j, isActive: true } : j))
    }

    return (
        <Box as='header'
            zIndex='100'
            bc='foregroundTranslucent'
            position='sticky'
            backdropFilter='blur'
            top='0'
            pt='2'
            px='4'
            width='full'
            height='fit'>
            <Flex direction='column' gap='2' jc='start'>
            <Flex direction='row' gap='4' ai='start' jc='spaceBetween'>
                <Flex direction='row' gap='4' ai='center'>
                    {Block}
                    {Mining}
                </Flex>
               <Terminal/>
            </Flex> 
            {activeJobs.length > 0 && (
                <Bleed>
                    {activeJobs.map((job) => {
                        // if(!job.isActive){
                         return(<Box width='full'
                         key={job.id + 'controller'} 
                         px='4'
                         py='1'
                         bc='foregroundSecondary'
                         >
                             <Flex direction='row' gap='2' ai='center' jc='spaceBetween'>
                             <Flex direction='row' gap='2' ai='center'>
                                <Text 
                                // size='3'
                                color='textForeground'>
                                    {job.id.slice(0,1).toUpperCase() + job.id.slice(1)}
                                </Text>
                                {job.strategy}
                                FPS: {job.fps}
                            </Flex>
 
                             <Flex direction='row' gap='2' ai='center'>
                                <Button
                                  onClick={()=>{
                                        if(job.isActive){
                                            PauseJob(job.id)
                                        }else{
                                            ResumeJob(job.id)
                                        }
                                    }}
                                >{!job.isActive ? 'Play' : 'Pause'}</Button>
                                {((job?.publicSignals?.filter((i)=>i !== "0") || []).length / (job?.publicSignals?.length || 1)) * 100} %
                             </Flex>
                             </Flex>
                         </Box>)
                        // } else 
                        // return 
})}
                   
                </Bleed>
            )}
            </Flex>

        </Box>
    )
}

export default Header 