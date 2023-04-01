import { ethers } from "ethers";
import { useContract, usePrepareContractWrite, useContractWrite } from "wagmi";
import contractAbi from "../../zk-ballot-box.abi.json" assert { type: "json" };
import { ZkConnectResponse } from "@sismo-core/zk-connect-react";

export function Vote({ zkResp }: { zkResp: string }) {
  const { config } = usePrepareContractWrite({
    address: "0x2b4b06eeb42fe3309b3752d20f71c029d88a1a05",
    abi: contractAbi,
    chainId: 5,
    functionName: "vote",
    args: [zkResp, "1"],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return <button onClick={() => write}>Vote</button>;
}
