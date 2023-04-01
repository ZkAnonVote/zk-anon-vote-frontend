import { configureChains, createClient } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import {
  googleWallet,
  // facebookWallet,
  // githubWallet,
  // discordWallet,
  // twitchWallet,
  twitterWallet,
  enhanceWalletWithAAConnector,
} from "@zerodevapp/wagmi/rainbowkit";
import { metaMaskWallet, rainbowWallet } from "@rainbow-me/rainbowkit/wallets";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";

const defaultProjectId = "15a38cb4-4be6-4a25-9650-8297a69d9641";

const { chains, provider, webSocketProvider } = configureChains(
  [goerli, ...(process.env.NODE_ENV === "development" ? [goerli] : [])],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "EOA Wrapped with AA",
    wallets: [
      enhanceWalletWithAAConnector(metaMaskWallet({ chains }), {
        projectId: defaultProjectId,
      }),
    ],
  },
  {
    groupName: "EOA",
    wallets: [rainbowWallet({ chains })],
  },
  {
    groupName: "Social (AA)",
    wallets: [
      googleWallet({
        options: { projectId: defaultProjectId },
      }),
    ],
  },
  {
    groupName: "Social (AA)",
    wallets: [
      twitterWallet({
        options: { projectId: defaultProjectId },
      }),
    ],
  },
]);

const client = createClient({
  autoConnect: false,
  connectors,
  provider,
  webSocketProvider,
});

export { client, chains };
