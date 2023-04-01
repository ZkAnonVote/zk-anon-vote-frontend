import { ethers } from "ethers";
import { useContract, usePrepareContractWrite, useContractWrite } from "wagmi";
import contractAbi from "../../zk-ballot-box.abi.json" assert { type: "json" };
import { ZkConnectResponse } from "@sismo-core/zk-connect-react";

export function Vote({ zkResp }: { zkResp: string }) {
  const { config } = usePrepareContractWrite({
    address: "0x5f4eb7d46a58a0c12608a525401e0c3a75b960f7",
    abi: contractAbi,
    chainId: 5,
    functionName: "vote",
    args: [zkResp, 1],
    overrides: {
      gasLimit: ethers.utils.parseUnits("0.001", "ether"),
    },
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <button
      type="button"
      className="text-lg rounded-full bg-white px-6 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={write}
    >
      Vote
    </button>
  );
}
