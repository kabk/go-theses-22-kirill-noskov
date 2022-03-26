import type { NextPage } from 'next'
import Layout from '@/design-system/Layout'
import { Paragraph, Heading, Box, Flex } from '@/design-system/primitives'
import { Decoder } from '@/design-system/Gadgets'
import Body from '@/design-system/Body'

const Home: NextPage = () => {

    return (
        <Layout>
            <Box width='full' mt='4' mb='4'>
                    <Body>
                        <Box pb='2'>
                            <Flex direction='column' gap='1'>
                                <Heading size='1'>
                                    Floating interfaces
                                </Heading>
                                <Flex direction='row' gap='1'>
                                    <Paragraph color='textForeground'>
                                        Kirill Noskov
                                    </Paragraph>
                                    <Paragraph color='textForeground'>
                                        15/04/22
                                    </Paragraph>
                                </Flex>
                            </Flex>
                        </Box>
                        <Paragraph>
                            There is an emergent field within blockchains — a subset that is called web3. It’s a “branded” version of crypto, but at its core is a set of powerful ideas that gonna change the internet. Instead of solving the flaws of the web from the top — enforcing user data laws through GDPR and regulating the platforms — they are solving them from basic principles. What if those platforms would never have power over the user data? What if the user would be the one that gives and takes permissions back? Wow, that’s so much better.
                        </Paragraph>

        
                        <Decoder 
                        index={1}
                        quantity={'12'}
                        name={'The Script'}
                        description={'Artifact will reveal itself after the minting complete'}
                        jobName={'script'}
                        />
                             
                        <Paragraph>
                            There is an emergent field within blockchains — a subset that is called web3. It’s a “branded” version of crypto, but at its core is a set of powerful ideas that gonna change the internet. Instead of solving the flaws of the web from the top — enforcing user data laws through GDPR and regulating the platforms — they are solving them from basic principles. What if those platforms would never have power over the user data? What if the user would be the one that gives and takes permissions back? Wow, that’s so much better.
                        </Paragraph>
                        <Paragraph>
                            The change is not just about the ownership and the data — it’s about the embodiment that web3 enables. Instead of reducing our interaction to a restricted set of ❤️🔥👍💩🤮 that carry nothing for anyone, but food for the algorithm, we embed the data with the value.
                        </Paragraph>
                        <Paragraph>
                            Most of the things that we do on the internet today were from hard to impossible to predict. Blockchains have the same potential. We can only speculate on what is gonna emerge when the web3 scales and begins to empower a variety of communities. If you look at crypto today you will hardly see any of those promises working, but there are the seeds, human and financial capital to make it work.
                        </Paragraph>
                        <Paragraph>
                            We will look at the atomic units of the web3 and blockchain in the context of the web today. But first ..
                        </Paragraph>
                        <Heading
                            css={{ margin: '$4 0' }}
                            size='2'
                            color='background'>Internet sucks
                        </Heading>
                    </Body>
        </Box>
        </Layout >
    )
}

export default Home
