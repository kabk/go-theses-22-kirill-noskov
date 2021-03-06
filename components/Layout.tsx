//utils
import { styled } from 'stitches.config'
//components
import Head from 'next/head'
import Header from '@/design-system/Header'
//state
import React from 'react'
import Script from 'next/script'
import { Terminal } from '@/design-system/Gadgets'

//types
import type { ReactNode } from 'react'


type Props = {
    children?: ReactNode;
    title?: string;
}

const StyledContainer = styled('div', {
    minHeight: '100vh',
    width: '100%',
})



const StyledMain = styled('main', {
    position: 'relative',
    height: '100%',
    overflow: 'true',
    minHeight: '100vh',
    boxSizing: 'border-box',
    padding: '$4',
    display: 'flex',
    flex: '1',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: '$5',
    '@bp1': {
        padding: '$2 $1',
    }
})

const StyledFooter = styled('footer', {
    background: 'transparent',
    position: 'absolute',
    height: 'auto',
    bottom: 0,
    left: 0,
    width: '100%',
    p: '$4',
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
})






const Layout = ({ children, title = 'Floating interfaces' }: Props) => {
    return (
        <StyledContainer>
            <Script
                //@ts-ignore-next-line
                onLoad={(res) => window.snarkjs = snarkjs}
                src="snarkjs.min.js" />

            <Head>
                <title>{title}</title>
                <meta name="description" content=" Modeling an approach for the interface design in the new era of decentralized internetMirror.xyz curation feed" />
                <link rel="icon" href="/go-theses-22-kirill-noskov/favicon.ico" />
            </Head>

            <Header />

            <StyledMain>
                <Terminal/>
                {children}
                {/* <StyledBackground /> */}
            </StyledMain>

            <StyledFooter>
            </StyledFooter>
        </StyledContainer >
    )
}

export default Layout