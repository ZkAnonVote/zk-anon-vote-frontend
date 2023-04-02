import Head from "next/head";
import {
  ZkConnectButton,
  ZkConnectResponse,
  AuthType,
  useZkConnect,
  ZkConnectClientConfig,
} from "@sismo-core/zk-connect-react";
import { RainbowKit } from "../components/RainbowKit";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useState } from "react";
import { Vote } from "@/components/vote";
import { ethers } from "ethers";
import Projects from "@/components/projects";

export const zkConnectConfig: ZkConnectClientConfig = {
  appId: "0x03e869be5fa809ca90f1b77a8e31b86f",
};

export default function Home() {
  const { response, responseBytes } = useZkConnect({ config: zkConnectConfig });
  const [zkResponse, setZkResponse] = useState<ZkConnectResponse | undefined>(
    undefined
  );

  const signedMessage = ethers.utils.defaultAbiCoder.encode(["uint"], ["1"]);

  return (
    <>
      <Head>
        <title>ZkAnon Vote</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between mt-5">
          <div className="text-xl font-bold">🥷 ZkAnonVote</div>
          <RainbowKit />
        </div>

        <ZkConnectButton
          config={zkConnectConfig}
          claimRequest={{
            groupId: "0x0cc0c43792cec360c9aee6af04acc22b",
          }}
          authRequest={{
            authType: AuthType.ANON,
          }}
          messageSignatureRequest={ethers.utils.defaultAbiCoder.encode(
            ["uint"],
            ["1"]
          )}
          onResponse={async (zkConnectResponse: ZkConnectResponse) => {
            await fetch("/api/verify", {
              method: "POST",
              body: JSON.stringify({
                zkConnectResponse: zkConnectResponse,
                signedMessage: signedMessage,
              }),
            });
            setZkResponse(zkConnectResponse);
          }}
        />

        {responseBytes && <Vote zkConnectRes={responseBytes} />}
        <Projects />
      </main>
    </>
  );
}
