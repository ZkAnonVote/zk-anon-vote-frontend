import {
  ZkConnectButton,
  ZkConnectResponse,
  AuthType,
  useZkConnect,
  ZkConnectClientConfig,
} from "@sismo-core/zk-connect-react";
import { ethers } from "ethers";

export const zkConnectConfig: ZkConnectClientConfig = {
  appId: "0x03e869be5fa809ca90f1b77a8e31b86f",
};

const signedMessage = ethers.utils.defaultAbiCoder.encode(["uint"], ["1"]);

export function ZkConnect() {
  return (
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
        }).then((response) => {
          console.log(response.body);
        });
      }}
    />
  );
}
