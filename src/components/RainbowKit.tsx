import { configureChains } from "wagmi";
import { goerli } from "wagmi/chains";
import {
  ConnectButton as RainbowKitConnectButton,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";

export function RainbowKit() {
  const { chains } = configureChains([goerli], [publicProvider()]);

  return (
    <RainbowKitProvider chains={chains} modalSize={"compact"}>
      <RainbowKitConnectButton />
    </RainbowKitProvider>
  );
}
