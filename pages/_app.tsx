import type { AppProps } from 'next/app'
import { Provider, defaultChains, chain } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'

import { globalStyles } from "stitches.config";
import { RecoilRoot } from 'recoil';



const chains = defaultChains

type GetProviderArgs = {
  chainId?: number;
  connector?: any;
}

const infuraId = 'fce3d1b932db4732be687fb143b7aabf'
const connectors = ({ chainId }: GetProviderArgs) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0]
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: 'Startupy Curators Season Zero',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ]
}

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <RecoilRoot><Provider connectors={connectors} autoConnect><Component {...pageProps} /></Provider></RecoilRoot>
}

export default MyApp
