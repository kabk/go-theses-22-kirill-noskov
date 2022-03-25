
// import snarkjs from 'snarkjs.min.js'

type Tuple<T, N extends number, A extends any[] = []> = A extends { length: N } ? A : Tuple<T, N, [...A, T]>;


const defaultValue = new Array(541).fill(0) as Tuple<number, 541>


async function checkWitness(inputs: Tuple<number, 541>): Promise<[Tuple<string, 541>, boolean, any]> {
    //@ts-ignore-next-line
    if (!window.snarkjs) {
        console.log("snarkjs not found");
        return [new Array(541).fill("0") as Tuple<string, 541>, true, '']
    }

    const vKey = await fetch('circuits/verification_key.json').then(res => res.json());
    //@ts-ignore-next-line
    const { proof, publicSignals } = await snarkjs?.groth16.fullProve({ "embeddings": inputs, "solutionHash": "3311778984402140377516185795808949866598784842322391614580833391480406905731" }
        , '/circuits/circuit.wasm', '/circuits/circuit_0001.zkey');

    //@ts-ignore-next-line
    const res = await snarkjs.groth16.verify(vKey, publicSignals, proof);

    if (res === true) {
        console.log("Verification OK");
        return [publicSignals as Tuple<string, 541>, true, proof]
    } else {
        console.log("Invalid proof");
        return [publicSignals as Tuple<string, 541>, false, proof]
    }

}

type DefaultValueType = typeof defaultValue
type DefaultReturnType = Tuple<string, 541>

export {
    checkWitness,
    defaultValue,
}
export type {
    DefaultValueType,
    DefaultReturnType
}