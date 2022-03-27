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
    isActivated: boolean;
    isComplete: boolean;
    resolution: [number, number];
    strategy: StrategyType;
    proof?: any;
    fps?: FPS;
    lastValue: DefaultValueType;
    prevValue: DefaultValueType;
    publicSignals?: DefaultReturnType;
}

type StrategyType = 'default' | 'all'

class defaultJobClass {
    constructor (
        public id: string,
        public isActive: boolean,
        public isActivated: boolean,
        public isComplete: boolean,
        public resolution: [number, number],
        public strategy: StrategyType,
        public lastValue: DefaultValueType,
        public prevValue: DefaultValueType,
        public proof?: any,
        public fps?: FPS,
        public publicSignals?: DefaultReturnType
    ) {
        this.id = id;
        this.isActive = isActive;
        this.isActivated = isActivated;
        this.isComplete = isComplete;
        this.resolution = resolution;
        this.strategy = strategy;
        this.proof = proof;
        this.fps = fps;
        this.lastValue = lastValue;
        this.prevValue = prevValue;
        this.publicSignals = publicSignals;
    }

}



const script:Job = new defaultJobClass('script', false, false, false, [24,24], 'default', defaultValue, defaultValue, undefined, undefined, undefined);
const stone:Job = new defaultJobClass('stone', false, false, false, [24,24], 'default', defaultValue, defaultValue, undefined, undefined, undefined);
const clay:Job = new defaultJobClass('clay', false, false, false, [24,24], 'default', defaultValue, defaultValue, undefined, undefined, undefined);
const parchment:Job = new defaultJobClass('parchment', false, false, false, [24,24], 'default', defaultValue, defaultValue, undefined, undefined, undefined);
const seal:Job = new defaultJobClass('seal', false, false, false, [24,24], 'default', defaultValue, defaultValue, undefined, undefined, undefined);



export const jobs = atom({
    key: "jobs",
    default: [script, stone, clay, parchment, seal] as Job[],
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
