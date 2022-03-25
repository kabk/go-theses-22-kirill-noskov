import { atom, selectorFamily } from "recoil";
import type { DefaultValueType, DefaultReturnType } from 'src/circuits/checkWitness'
import { defaultValue } from 'src/circuits/checkWitness'
import {persistAtom} from './utils'
import type { AtomEffect } from 'recoil'
import { DefaultValue } from "recoil";

const guardRecoilDefaultValue = (
    candidate: any
): candidate is DefaultValue => {
    if (candidate instanceof DefaultValue) return true;
    return false;
};


type FPS = number | null;
export type Job = {
    id: string;
    isActive: boolean;
    isComplete: boolean;
    strategy: StrategyType;
    proof?: any;
    fps?: FPS;
    lastValue: DefaultValueType;
    prevValue: DefaultValueType;
    publicSignals?: DefaultReturnType;
}

type StrategyType = 'default' | 'all'

const defaultJobValue = {
    id: "script",
    isActive: false,
    isComplete: false,
    strategy: "default" as StrategyType,
    proof: undefined,
    lastValue: defaultValue,
    prevValue: defaultValue,
    publicSignals: undefined,
} as Job;



export const jobs = atom({
    key: "jobs",
    default: [defaultJobValue] as Job[],
    effects: [persistAtom] as AtomEffect<Job[]>[]
})

export const job = selectorFamily<Job | undefined, string>({
    key: 'job',
    get: (param)=>({get}) => {
        const allJobs = get(jobs)
        const job = allJobs.find(j => j.id === param)
        return job
    },
    set: (param)=>({set, get}, newValue) => {
        if (guardRecoilDefaultValue(newValue)) return;
        const allJobs = get(jobs)
        const job = allJobs.find(j => j.id === param)
        if (job) {
            set(jobs, allJobs.map(j => j.id === param ? {...j, ...newValue} : j))
        }
    }
})
