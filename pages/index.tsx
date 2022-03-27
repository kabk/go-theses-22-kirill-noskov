import type { NextPage } from 'next'
import Layout from '@/design-system/Layout'
import { Paragraph, Heading, Box, Flex } from '@/design-system/primitives'
import { Decoder } from '@/design-system/Gadgets'
import Body from '@/design-system/Body'

const Home: NextPage = () => {

    return (
        <Layout>
            <Box width='full' mt='6' mb='4'  overflow={true}>
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
                        My first Web experience was on a Russian social network called My World that had copies of the Zenga games. I was farming digital vegetables with my internet mates, coordinating the development of my little enterprise over ICQ messenger. Experience of being disconnected for a while&thinsp;—&thinsp;just to come home from school with excitement to check my field and pull the weeds off. It was&thinsp;... nice. Internet was an exploration, full of unknown people you meet while playing games or visiting their handcrafted pages.
                        </Paragraph>
    
                        <Paragraph>
                        The internet started as a decentralized network&thinsp;—&thinsp;everyone could buy a server, plug it in, and share the text with the other hyperspace-wanderers. The content was not interactive&thinsp;—&thinsp;just some gifs, thick borders, and lots of vibes. Things changed when more people started to use the internet&thinsp;—&thinsp;the network evolved from simple file sharing to support rich interaction, opportunities to socialize, blogging, and personal accounts. 
                        </Paragraph>
                        <Paragraph>Those innovations brought mass adoption, made large-scale distribution possible, and simplified life for billions. Large platforms orchestrate our interaction with the Web today. They own our music collections, images, and friends lists. We rely on them to search, store emails, and message each other. While useful, they are the walled gardens&thinsp;—&thinsp;users can not escape them without bearing the disadvantages. They compete for the data&thinsp;—&thinsp;the most data-rich platforms dominate the market. Web became focused on consumption, large platforms don&apos;t have any incentives to improve user interaction or experiment. 
                        </Paragraph>
                        <Paragraph>
                        Blockchains influence the way we build applications&thinsp;—&thinsp;projects replace parts with blockchain as the primary data layer enabling composability, unified identity across the apps, and user-controlled governance. We use a shared global computer instead of a server controlled by someone in Sillicon Valley. Companies don&apos;t compete for the data accumulation anymore&thinsp;—&thinsp;they share the same underlying source. 
                        </Paragraph>
                        <Paragraph>
                        The interface reflects those changes: on a microscale, we see new buttons like Sign in with Ethereum (one of the largest public blockchain), transaction fee labels, and user signatures enabled by the wallets. On a macroscale, those changes lead to radically different apps and architectures. We get some of the early Web vibes back&thinsp;—&thinsp;ugly NFTs here and there, illegible account hashes, shared language, and anonymous accounts with thousands of subscribers.
                        </Paragraph>
                        <Paragraph>
                        Existing articles on blockchain and interface highlight the lack of qualities exhibited by typical consumer platforms&thinsp;—&thinsp;convenience, simplicity, and clear communication. To reach mass adoption, those articles say, we need to remove friction, rethink terminology, decrease the costs. Those are legitimate considerations, but they are not helpful guiding principles on how to think about an interface for the blockchain app. We do not want to achieve a better experience&thinsp;—&thinsp;we need a different kind of experience. It is too easy to fall into the same problems as the previous generation of applications if you try to achieve “frictionless” at any cost. 
                        </Paragraph>
                        <Paragraph>
                        Interface in a blockchain world reflects the underlying system more than in a typical consumer app&thinsp;—&thinsp;application logic is bound with the data and often immutable. Blockchain interfaces are somewhat floating&thinsp;—&thinsp;they provide a different view of the single source. They levitate near the same smart contract, a piece of code & the data running on the blockchain, but penetrate various edges of the Web. Those interfaces may function as gatekeepers&thinsp;—&thinsp;hiding certain information or restricting access for targeted individuals. However, they do not control the application logic and data&thinsp;—&thinsp;users engage with an app if the prioritization brings personal advantages.
                        </Paragraph>
                        <Paragraph>
                        Those qualities&thinsp;—&thinsp;the openness and the bouding of logic and the data&thinsp;—&thinsp;influence the mindset of the application builders, available funding options, and the interaction within a Web. Blockchain started as the antidote to a government monopoly on the financial system, but its influence has broad implications on our social fabric. In this text, we will consider the politics of the interface, the governance, and the changes that the blockchain ecosystem brings to the platform-dominated Web. Emergence <i>(or harmony-seeking as Christopher Alexander would say it)</i> of blockchain powered applications brings more nodamic digital experience&thinsp;—&thinsp;continious movement from platform to platform is the new norm.
                        </Paragraph> 


                        <Decoder 
                        index={1}
                        quantity={'12'}
                        name={'The Script'}
                        description={'Artifact will reveal itself after the minting complete'}
                        jobName={'script'}
                        />

                        <Flex direction='column' gap='3'>
                        <Heading
                            css={{ margin: '$6 0 0 0' }}
                            size='2'
                            color='text'>
                                Politics of the interface
                        </Heading>
                        <Paragraph size='7'>
                           Relationships between politics and the interface 
                        </Paragraph>
                        </Flex>

                        <Paragraph>
                        We can approach everything as an interface. Our body is an interface <i>(or a medium!)</i> through which our brain interacts with a physical world. The city is an interface through which we make friends and access services. An interface is an abstract place in which any communication happens&thinsp;—&thinsp;human to human, human to machine, or a machine to machine. Public discourse on the interface considers mostly digital systems. 
                        </Paragraph>

                        <Paragraph>
                        Interfaces rarely single-handedly influence politics*, but they are political&thinsp;—&thinsp;we develop applications within a specific system and reinforce its values and properties. Interfaces are the places of last resort&thinsp;—&thinsp;available design options shaped by the underlying business logic, the model, and the available data. The key to understand the modern interfaces is to understand their role in the politics. 
                        </Paragraph>

                        <Paragraph>
                        Typical digital application today is built out of 3 different layers&thinsp;—&thinsp;data ↔ logic ↔ interface. Engineers designs those applications “separating the concerns” — those layers should not be mixed. They work separately and each has a specific role. Interface layer is often called a view or presentational layer&thinsp;—&thinsp;it presents the data that was picked and organized by the logic. It&apos;s responsbile to supply and capture the data taken from and written back to the server database. 
                        </Paragraph>

                        <Paragraph>
                        Web platforms are the most used digital applications. Fierce battles among them are for the ownership of data. It&apos;s what keeps users on a platform and generates profits. They benefit from centralization. States, similar to the platforms, benefit from the supply of data. Post indexes, permanent addresses, maps, surnames, passports&thinsp;—&thinsp;are all technologies designed to improve the visibility of people for the state. It then provides an interface&thinsp;—&thinsp;ambulance, pension, identity verification, copyright enforcement, scholarships. Platforms operate like governments and often take the same functions within the digital space&thinsp;—&thinsp;controlling identity and access, powering the majority of infrastructure, policing public spaces.
                        </Paragraph>

                        <Paragraph as='blockquote' css={{pl:'$4', my:'$2', borderLeft:'1px solid $textForeground'}}>
                        «&thinsp;The argument can be made that the history of states is a history of what it is that states are technologically capable of seeing at any point in historical time. The cloud allows the state to see things it had previously not been able to see...&thinsp;»<br/>—&thinsp;Benjamin Bratton, The Stack, and the Post-human User.
                        </Paragraph>

                        <Paragraph>
                        Governments&apos; and platforms&apos; strains are not surprising&thinsp;—&thinsp;they compete over the same goals, their internal politics differ. Government is an operating system&thinsp;—&thinsp;it develops services and interfaces to communicate with citizens & other non-human entities. The majority of its interfaces are digital. The line between government and web platforms blurs — small wealthy countries like the Netherlands or Singapore function like platforms&thinsp;—&thinsp;running its incubators, governmental tech platforms, publishing open-source code. 
                        </Paragraph>

                        <Paragraph>
                        Governmental services in a democracy can&apos;t exchange data without the explicit agreement of citizens. Specific information may be exchanged between the agencies only with a permission. The Soviet Union operated as a corporation — its private interests were “internal market capture, the avoidance of the transaction costs of the capitalist market, and the concentration of power to itself”. Centralization would ensure the best possible outcome for the nation. Only if we learn to follow the directives and supply more data to the center. Directives and reports were a way for the Soviet state to see and control its economic activity. They didn’t need an API to exchange the citizens data. 
                        </Paragraph>
                        <Paragraph>

                        The latest iteration of the Web was supposed to enable composability through public APIs —  fetch data from the website, extend the functionality, create a custom client, or plug it into your blog. You didn’t use Twitter from the official mobile app — you would reach for a Tweetbot for a chronological feed and reduced ads. You just needed to give a permission to use your account. Once those platforms scaled — benefitting from the virtuous cycle created by public APIs and open access — they’ve restricted, the throttled or removed APIs. You should access Twitter only from the official app. 
                        </Paragraph>
                        <Paragraph>

                        I&apos;ve deleted my Instagram&thinsp;—&thinsp;all my subscriptions and curation disappeared with it. I can not nostalgically visit the profile of my favorite artist to see the updates. All the connections were lost. The promise of composability has failed — it benefited a few. Most people don’t occasionally download apps anymore — their internet is reduced to a small number of close networks. In most African countries, Facebook *is* the internet.
                        </Paragraph>
                        <Paragraph>

                        Free search, free personal email with storage, fonts, video hosting, unified account, analytics, and more. Most of us never pay Google for their services. Company is optimizing for legibility. Their mission is literally to index all the internet. We use the services daily and access them through their browser. Website owners who decide to place free Google Analytics to iterate on the product, style their website with Fonts, or enable Sign-In with Google, snooping on their users on behalf of Google. It creates a better model for them. We pay Google to advertise on Google. It concetraces the power to itself. There can&apos;t be any system running in parallel — the one with the most legibility wins. 
                        </Paragraph>
                        <Paragraph>
                        While we enjoy free services, companies try to extract more value from the larger audience on the scale. Incentives are not aligned with those of the free plan users&thinsp;—&thinsp;companies constantly changes the interface to nudge user behavior towards their needs. We don&apos;t pay directly, but we cover the costs with our data. This model is corrupt — it doesn’t have any incentives to radically change the way people work with an email, collaborate on the document, search the internet. Google Chrome is a browser designed for you to get lost, search for the information at their website, and click on the advertisement. It&apos;s interface is a direct result of those needs&thinsp;—&thinsp;to capture as much data as possible, to increase the legibility for an algorithm. 
                        </Paragraph>
                        <Paragraph>

                        It&apos;s a win-lose situation&thinsp;—&thinsp;you have to use Google, or otherwise, your business can&apos;t compete. You have to use Facebook services or you isolate yourself from the network. Even though the architecture of the web is decentralized, small companies can&apos;t compete with large platforms to attract enough customers or execute fast. It is not much different from the way governmental services work. Business owners have to submit information about their employees to the government to calculate pensions or enforce taxes. You can&apos;t choose to use a pension fund run by a private company — you have to trust the government with it. The difference is that those structures are public goods&thinsp;—&thinsp;they aren&apos;t free to run, but citizens cover them with taxes. They may be poorly operated, but we have a choice to vote for change. 
                        </Paragraph>
                        <Paragraph>

                        Soviet Union centralized the data, but it didn&apos;t help in the long rung. Capitalism coordinates economic activity through the market&thinsp;—&thinsp;an invisible force that prioritizes high-leverage activities and encourages individuals or groups to optimize them. In the Cold War, that ensured better outcomes for the population. It aggregates [“the poorly codified knowledge that implicitly guides the behavior of market participants”](https://www.newyorker.com/magazine/2014/10/13/planning-machine). Local and context speficic is more beneficial than the often noisy and unrelated data. 
                        </Paragraph>
                        <Paragraph>

                        Autocractic nature of the Web platforms is a result of underlying structures. Those with the largest network effects dominate the market. Once all your friends and family are there&thinsp;—&thinsp;you can&apos;t just painlessly leave them. It has to be <i>a whole social layer</i>that moves&thinsp;—&thinsp;as young adults moved to Snapchat once their parents came to Facebook&thinsp;—&thinsp;we have to move elsewhere together. Those should not be a new alternatives like Tiktok or Clubhouse, but platforms with a radically different organization.
                        </Paragraph>

                        <Decoder 
                        index={2}
                        quantity={'12'}
                        name={'The Stone'}
                        description={'Artifact will reveal itself after the minting complete'}
                        jobName={'stone'}
                        />

                        <Paragraph>
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
