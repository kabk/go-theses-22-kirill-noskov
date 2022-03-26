import replaceItemAtIndex from 'src/replaceItemAtIndex'
import { checkWitness, defaultValue, DefaultValueType, DefaultReturnType } from 'src/circuits/checkWitness'
import { useRef, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { jobs } from 'contexts'
import type { Job } from 'contexts'


const useDecoder = (jobName: string) => {

    const [activeJobs, setActiveJobs] = useRecoilState(jobs)
    const currentJob = activeJobs.find((item) => item.id === jobName)

    const isActive = useRef<boolean>(false)
    const lastTimestamp = useRef<number | null>(null)
    const currentProcess = useRef(0)
    const curretValue = useRef<DefaultValueType>()
    

    const changeStrategy = (job:string, strategy: Job['strategy']) => {
        const newJobs = activeJobs.map((item) => {
            if (item.id === job) {
                return { ...item, strategy }
            }
            return item
        })
        setActiveJobs(newJobs)
    }

    const resumeJob = (job: string) => {
        setActiveJobs(activeJobs.map(j => j.id === job ? { ...j, isActive: true, isActivated:true } : j))
    }

    const pauseJob = (job: string) => {
        lastTimestamp.current = null
        setActiveJobs(activeJobs.map(j => j.id === job ? { ...j, isActive: false } : j))
    }

    const updateJobValue = async (value: DefaultValueType, signals:DefaultReturnType, timestamp:number) => {
        console.log('updating the job value_', timestamp)
        const fps = (timestamp - (typeof lastTimestamp === 'number' ? lastTimestamp :0)) / 1000
        lastTimestamp.current = timestamp
        setActiveJobs(prev => {
            const newJobs = prev.map(job => {
                if (job.id === jobName) {
                    return {
                        ...job,
                        lastValue: value,
                        prevValue: job.lastValue,
                        publicSignals: signals,
                        isActive: isActive.current,
                        fps
                    }
                }
                return job
            })
            return newJobs
        })
    }

    const geProof = async (currVal: DefaultValueType) => {
        console.log('getting proof')
        // 0s arent supported, so we need to convert them to 27s (which is +1 to max value of 26)
        const proof = await checkWitness(currVal.map((i) => i === 0 ? 27 : i) as DefaultValueType)
        return proof[0]
    }

    const obtainSignals = async (): Promise<DefaultReturnType | undefined> => {
        //@ts-ignore
        if (typeof window === undefined || typeof window?.snarkjs === undefined || curretValue.current === undefined) {
            console.log('cant obtain the proof, one of the values is undefined')
            return 
        }
        //@ts-ignore
        const publicSignals: DefaultReturnType = await geProof(curretValue.current)
        console.log('got proof')
        return publicSignals
    }

    const setComplete = async () => {
        await setActiveJobs(prev => {
            const newJobs = prev.map(job => {
                if (job.id === jobName) {
                    return {
                        ...job,
                        isComplete: true
                    }
                }
                return job
            })
            return newJobs
        })
    }

    //@returns isNextFrame or not 
    const mine = async (timestamp:number): Promise<boolean> => {
        console.log('mining', timestamp)
        const publicSignals: DefaultReturnType | undefined = await obtainSignals()
        if (!publicSignals) {
            console.log('no public signals, cancelling job')
            return false
        }
        console.log('received public signals')
        //find items that aren't proved 
        const i: number = publicSignals.findIndex(x => x === "0")
        if (i === -1 || !curretValue.current) {
            await setComplete()
            console.log('your are done', publicSignals)
            alert('you are done!')
            return false
        }
        const newLetter = (curretValue.current && curretValue.current[i] && curretValue.current[i] >= 27) ? 0 : curretValue.current[i] + 1;
        const newValue = replaceItemAtIndex<DefaultValueType>(curretValue.current, i, newLetter) as DefaultValueType
        if (newValue && newValue.length === defaultValue.length) {
            updateJobValue(newValue, publicSignals, timestamp)
            curretValue.current = newValue as DefaultValueType
        }
        return true
    }


    const runAnimation = async (timestamp:number) => {
        console.log('running next frame')
        //@ts-ignore-next-line
           if (typeof window === undefined || typeof window?.snarkjs === undefined || curretValue.current === undefined) {
            if(isActive.current) {
                console.log('snarkjs was not found, trying again')
                currentProcess.current = requestAnimationFrame(runAnimation)
            }
            return
        }

        if (!await mine(timestamp)) {
            return
        }
        if(isActive.current) {
            currentProcess.current = requestAnimationFrame(runAnimation)
        } else {
            lastTimestamp.current = null
        }
    }

    const StartMining = (job: Job) => {
        isActive.current = true
        curretValue.current = job.lastValue
        currentProcess.current = requestAnimationFrame(runAnimation)
    }
    

    useEffect(() => {
        return () => {
            isActive.current = false
            lastTimestamp.current = null
            console.log('cancelling job', jobName)
            pauseJob(jobName)
            cancelAnimationFrame(currentProcess.current)
        }
    }, [])

    useEffect(() => {
        console.log('current job updated_', jobName)
        if (activeJobs && activeJobs?.length > 0) {
            const item = activeJobs.find((item) => item.id === jobName)
            if (item && item?.isActive) {
                console.log('start mining the job', jobName)
                StartMining(item)
            } else {
                isActive.current = false
                console.log('cancelling the job', jobName)
                cancelAnimationFrame(currentProcess.current)
            }
        }
    
    }, [currentJob?.isActive, jobName])

   


    return {
        resumeJob,
        pauseJob,
        changeStrategy,
        activeJobs
    }

}

export default useDecoder