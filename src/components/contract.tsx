// import { ZkConnectResponse } from "@sismo-core/zk-connect-react";
// import {
//   useAccount,
//   usePrepareContractWrite,
//   useContractWrite,
//   useContractRead,
//   useSigner,
// } from "wagmi";
// import contractAbi from "../../zk-ballot-box.abi.json" assert { type: "json" };
// import { ZeroDevSigner } from "@zerodevapp/sdk";
// import { useCallback, useState, useRef } from "react";
// import { Contract } from "ethers";

// const contractAddress = "0x213269060ea45cff8232b1691eb0c26678e161d9";
// const contractABI = contractAbi;

export function Vote() {}
//   zkConnectRes,
// }: {
//   zkConnectRes: string;
//   projectId: string;
// }) {
//   const { address, isConnected } = useAccount();

//   const { config } = usePrepareContractWrite({
//     address: contractAddress,
//     abi: contractABI,
//     functionName: "vote",
//     args: [zkConnectRes, 0],
//     enabled: true,
//   });

//   const { write: vote, isLoading } = useContractWrite(config);

//   const { refetch } = useContractRead({
//     address: contractAddress,
//     abi: contractABI,
//   });

//   const interval = useRef<any>();
//   // const handleClick = useCallback(() => {
//   //   if (batchMint) {
//   //     batchMint();
//   //     // interval.current = setInterval(() => {
//   //     //   refetch();
//   //     // }, 1000);
//   //   }
//   // }, [batchMint]);

//   const { data: signer } = useSigner<ZeroDevSigner>();
//   const [isBatchMintLoading, setIsBatchMintLoading] = useState(false);
//   const batchMint = async () => {
//     setIsBatchMintLoading(true);
//     const voteContract = new Contract(contractAddress, contractABI, signer!);
//     await signer!.execBatch([
//       {
//         to: contractAddress,
//         data: voteContract.interface.encodeFunctionData("vote", [
//           zkConnectRes,
//           0,
//         ]),
//       },
//     ]);
//     interval.current = setInterval(() => {
//       refetch();
//     }, 1000);
//     setIsBatchMintLoading(false);
//   };

//   return (
//     <button onClick={batchMint} disabled={isLoading}>
//       {isBatchMintLoading ? "Loading..." : "Mint NFT"}
//     </button>
//   );
// }
