import { styled, keyframes } from 'stitches.config'
import { Paragraph, Text, Box, Flex, Bleed, Button, Progress, MotionBox } from '@/design-system/primitives'
import IconPlay from '@/design-system/icons/Play'
import IconPause from '@/design-system/icons/Pause'

import { useBlockNumber } from 'wagmi'
import useHardwareDetails from './useHardwareDetails.hook'
import { useRecoilState } from 'recoil'
import { useState, useEffect } from 'react'
import useScrollPosition from '@react-hook/window-scroll'

//state
import { jobs } from 'contexts'

const clamp = (num:number, min:number, max:number) => {
  return num <= min 
    ? min 
    : num >= max 
      ? max 
      : num
}

const orbAnimation = keyframes({
    '0%': {
        transform: 'scale(0.85)',
    },
    '100%': {
        transform: 'rotate(1)',
    },
})
    

const StyledMiningStatus = styled('div', {
    width: '$3',
    height: '$3',
    borderRadius: '$round',
    animation: `${orbAnimation} 3s linear infinite`,
    animationFillMode: 'both',
    animationDirection: 'alternate',
    animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.2, 0.1)',
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


    const [isPinnedList, setIsPinnedList] = useState(false)
    const [scrollDir, setScrollDir] = useState<'top' | 'bottom' | 'stale'>('stale')
    const scrollY = useScrollPosition(8) //framerate scroll check
    const [prevScroll, setPrevScroll] = useState(0)


    useEffect(() => {
        const currentScroll = scrollY
        if (currentScroll >= Math.floor(window.innerHeight / 3) && scrollDir === 'bottom') {
            setIsPinnedList(false)
        }
        if (currentScroll <= 200) {
            setIsPinnedList(true)
            return
        }
        if ((prevScroll - currentScroll) > 130 && scrollDir !== 'top') {
            setScrollDir('top')
        }
        if ((prevScroll - currentScroll) > 130 && scrollDir === 'top') {
            setIsPinnedList(true)
        }
        if ((currentScroll - prevScroll) > 70 && scrollDir !== 'bottom') {
            setScrollDir('bottom')
        }
        setPrevScroll(scrollY)

    }, [scrollY, scrollDir, prevScroll])


    const BlockStatus = <Box></Box>
    const BlockText = <Box><Paragraph size={'7'} color='text'>Block</Paragraph><Paragraph size={'7'} color='textForeground'>{dataBlock || '0000000'}</Paragraph></Box>
    const Block = <Flex direction='row' gap='2'>{BlockText}{BlockStatus}</Flex>

    const MiningStatus = <StyledMiningStatus active={
        activeJobs.find((item) => item.isActive === true) ? true : false
    } />
    const MiningText = <Box><Paragraph size={'7'} color='text'>Mining</Paragraph><Paragraph size={'7'} color='textForeground'>{
        activeJobs.find((item) => item.isActive === true) ? 'In Progress' : 'Not active'
    }
        </Paragraph></Box>
    const Mining = <Flex direction='row' gap={{'@initial': '4', '@bp1':'2'}} ai='center'>{MiningText}{MiningStatus}</Flex>

    const PauseJob = (jobName:string) => {
        setActiveJobs(activeJobs.map(j => j.id === jobName ? { ...j, isActive: false } : j))
    }

    const ResumeJob = (jobName:string) => {
        setActiveJobs(activeJobs.map(j => j.id === jobName ? { ...j, isActive: true } : j))
    }

    const variants = {
        visible: (i:number) => ({
          opacity: 1,
          y:0,
          transition: {
            delay: 0.3,
          },
        }),
        transform: (i:number) => ({
            opacity: 1,
            y:'-54px',
            zIndex:1000,
            transition: {
              delay: i * 0.3,
              ease: 'anticipate',
            },
          }),
        hidden: { opacity: 0,  y: '-120px' },
      }
    return (
        <Box
        as='header'
        zIndex='100'
        position='sticky'
    
        overflow={true}
        top='0'
        width='full'
        height='fit'
        >
    <Flex direction='column'>
        <Box
            bc='foregroundTranslucent'
            css={{
                transform:!isPinnedList ? 'translateY(-100%)':'translateY(0)',
                transition: 'transform 0.3s ease-in-out',
            }}
        
            backdropFilter='blur'
            overflow={true}
            top='0'
            py='2'
            px='4'
            width='full'
            height='fit'>
            <Flex direction='row' gap='4' ai='start' jc='spaceBetween'>
                <Flex direction='row' gap='4' ai='center'>
                    {Block}
                    {Mining}
                </Flex>
                <Flex direction='row' gap='3' ai='center'>
                <Paragraph
                css={{'@bp1':{display:'none', '@initial':{display:'inline'}}}}
                size='7' color='textForeground'>
                github.com/&thinsp;kabk/&thinsp;gd2022<br/>
                Coded Thesis 
                </Paragraph>
                <Box as='hr'
                bc={'textForeground'}
                css={{width:'1px', height:'$4', opacity:0.55, '@bp1':{display:'none', '@initial':{display:'inline'}}}}
                />
                <Paragraph size='7' color='textForeground'>
                Royal Academy of Art<br/>
                GD 2022
                </Paragraph>
              
             
                </Flex>
       
            </Flex> 
        </Box>
        {activeJobs.length > 0 && (
            
                    <MotionBox    overflow={true}>
                    {activeJobs.filter(i => i.isActivated).map((job, i:number) => {
                        // if(!job.isActive){

                        const rightSide =   
                        <Flex direction='row' gap='2' ai='center'>
                        {/* {job.strategy} */}
                            <Paragraph size='7'>{job.fps}</Paragraph> 
                            <Button
                            padding='small'
                            shape='square'
                            onClick={()=>{
                                    if(job.isActive){
                                        PauseJob(job.id)
                                    }else{
                                        ResumeJob(job.id)
                                    }
                                }}
                            >{!job.isActive ? <Box 
                            height='2'
                            width='2'
                            position='relative' css={{right:'-1px'}}><IconPlay/></Box> : <IconPause/>}
                            </Button>
                    </Flex>
                   


                        const progress = clamp(((job?.publicSignals?.filter((i)=>i !== "0") || []).length / (job?.publicSignals?.length || 1)) * 100, 5, 100)
                         return(<MotionBox width='full'
                         animate={!isPinnedList ? 'transform' : 'visible'}
                         custom={i}
                         initial={{opacity:0, y:'-120px'}}
                         position='relative'
                         variants={variants}
                        overflow={true}
                         key={job.id + 'controller'} 
                         px='4'
                         pt='2'
                        css={{
                            borderBottom:'1px solid rgba(0,0,0,0.2)',
                        }}
                         bc='foregroundSecondary'
                         >
                             
                                <Box 
                                style={{ width: `${progress}%` }}
                                >
                                    <Flex direction='row' gap='2' ai='center' jc='end'>
                                        <Text 
                                        size='p'
                                        color='textForeground'>
                                            {job.id.slice(0,1).toUpperCase() + job.id.slice(1)}
                                        </Text>
                                    </Flex>
                                </Box>
                                <Bleed>
                                    <Progress.Root>
                                            <Progress.Indicator style={{ width: `${progress}%` }}/>                                  
                                    </Progress.Root>
                                 </Bleed>
                                
                                <Box position='absolute'
                                px='4'
                                css={{display:'flex', ai:'center', jc:'end'}}
                                height='full' width='full' right={0} top={0}>
                                  {rightSide}
                                </Box>
                         
                             
                         </MotionBox>)
                        
                  
})}
                    </MotionBox>
              
            )}
            </Flex>
        </Box>
    )
}

export default Header 