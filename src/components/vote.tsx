import { usePrepareContractWrite, useContractWrite } from "wagmi";
import contractAbi from "../../zk-ballot-box.abi.json" assert { type: "json" };
import { useCallback } from "react";
import { ethers } from "ethers";

export function Vote({ zkConnectRes }: { zkConnectRes: string }) {
  const { config } = usePrepareContractWrite({
    address: "0xA24953B4cFA339378F83C3B5d052dcd3AA562af2",
    abi: contractAbi,
    chainId: 5,
    functionName: "vote",
    args: [zkConnectRes, 1],
    overrides: {
      gasLimit: ethers.utils.parseUnits("0.00000000001", "ether"),
    },
  });

  const { write: vote, isLoading } = useContractWrite(config);

  const handleClick = useCallback(() => {
    if (vote) {
      vote();
    }
  }, [vote]);

  return (
    <button
      type="button"
      className="text-lg rounded-full bg-white px-6 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-4"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Send vote"}
    </button>
  );
}
