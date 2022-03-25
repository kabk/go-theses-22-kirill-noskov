import type { NextPage } from 'next'
import Layout from '@/design-system/Layout'
import { Paragraph, Text, Box, Heading, Flex } from '@/design-system/primitives'
import { constructTree } from 'src/getMerkleRoot'
import { useEffect, useState, useRef, useCallback } from 'react'
import { checkWitness, defaultValue, DefaultValueType, DefaultReturnType } from 'src/circuits/checkWitness'

function replaceItemAtIndex(arr: DefaultValueType, index: number, newValue: any) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

// function letterValue(str:string){
//   const anum= {
//       'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 
//       'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 
//       'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
//   }
//   const key = str as keyof typeof anum
//   if(str.length== 1) return anum[key] || 27;
//   return str.split('').map(letterValue);
// }

function valueLetter(n: number) {
  const anum = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11,
    'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
    'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26, '*': 0, ' ': 27
  }
  const newV = Object.keys(anum).find(key => {
    const keyT = key as keyof typeof anum
    return anum[keyT] === n
  });

  return newV
}



const Home: NextPage = () => {

  // const [state, setState] = useState<string[]>([])
  const [value, setValue] = useState<DefaultValueType>(defaultValue)
  const [proof, setProof] = useState<DefaultReturnType | null>(null)
  const currentProcess = useRef(0)
  const curretValue = useRef<DefaultValueType>()


  const geProof = async (currVal: DefaultValueType) => {
    const proof = await checkWitness(currVal.map((i) => i === 0 ? 27 : i) as DefaultValueType)
    return proof[0]
  }

  const runMining = async () => {
    if (typeof window === undefined || typeof window?.snarkjs === undefined) {
      currentProcess.current = requestAnimationFrame(runMining)
      return
    }
    const proofValue: DefaultReturnType = await geProof(curretValue.current)
    console.log('proofValue__', proofValue, curretValue.current)
    const i = proofValue.findIndex(x => x === "0")
    setProof(proofValue)
    console.log('index', i)
    if (i === -1) {
      console.log('your are done', proofValue)
      alert('you are done!')
      return
    }
    const newLetter = curretValue?.current[i] >= 27 ? 0 : curretValue?.current[i] + 1;
    const newValue = replaceItemAtIndex(curretValue.current, i, newLetter)
    if (newValue.length === value.length) {
      setValue(newValue as DefaultValueType)
      curretValue.current = newValue
      currentProcess.current = requestAnimationFrame(runMining)
    }
  }

  useEffect(() => {
    curretValue.current = value
    currentProcess.current = requestAnimationFrame(runMining)
    return () => {
      cancelAnimationFrame(currentProcess.current)
    }
  }, [])

  return (
    <Layout>
      Hey
      <Box css={{ color: 'white' }}>
        <Flex ai='center' jc='center'>
          <Box width='30' css={{ wordBreak: 'break-word', hyphens: 'auto' }}>
            <Box px='1' py='2'
              borderRadius={'medium'}
              css={{
                mb: '$2',
                background: 'linear-gradient(180deg, #161616 0%, rgba(0, 0, 0, 0) 100%), #000000',
                boxShadow: '0px -9px 25px 2px rgba(190, 190, 190, 0.3), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px 2px 3px 1px rgba(255, 255, 255, 0.25)'
              }}
            >
              <Paragraph>
                {value?.map((x, i) => {
                  const style = {
                    color: proof ? proof[i] === '0' ? 'red' : 'green' : 'white',
                    fontSize: 'inherit',
                    lineHeight: 'inherit'
                  }
                  return <Box as='span'
                    key={i + 'letter'}
                    css={style}
                  >
                    {valueLetter(x)}
                  </Box>
                })}
              </Paragraph>
            </Box>
            <Paragraph>
              There is an emergent field within blockchains — a subset that is called web3. It’s a “branded” version of crypto, but at its core is a set of powerful ideas that gonna change the internet. Instead of solving the flaws of the web from the top — enforcing user data laws through GDPR and regulating the platforms — they are solving them from basic principles. What if those platforms would never have power over the user data? What if the user would be the one that gives and takes permissions back? Wow, that’s so much better.
            </Paragraph>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default Home
