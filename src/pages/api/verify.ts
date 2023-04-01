// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  ZkConnect,
  ZkConnectServerConfig,
  AuthType,
} from "@sismo-core/zk-connect-server";

type Data = {
  vaultId?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {
  try {
    const { zkConnectResponse } = JSON.parse(req.body);

    const zkConnectConfig: ZkConnectServerConfig = {
      appId: "0x03e869be5fa809ca90f1b77a8e31b86f",
    };
    const zkConnect = ZkConnect(zkConnectConfig);

    const { verifiedAuths } = await zkConnect.verify(zkConnectResponse, {
      claimRequest: { groupId: "0x0cc0c43792cec360c9aee6af04acc22b" },
      authRequest: { authType: AuthType.ANON },
    });

    const anonUserId = verifiedAuths[0].userId;
    res.status(200).json({ vaultId: anonUserId });
  } catch (error) {
    res.status(400).json({ error: error });
  }
}
