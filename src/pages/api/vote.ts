// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  ZkConnect,
  ZkConnectServerConfig,
  AuthType,
} from "@sismo-core/zk-connect-server";
import { config } from "../../config";

type Data = {
  vaultId?: string;
};

const zkConnectConfig: ZkConnectServerConfig = {
  appId: config.appId,
};

const zkConnect = ZkConnect(zkConnectConfig);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {
  try {
    const { zkConnectResponse, signedMessage, projectVotedId } = JSON.parse(
      req.body
    );

    const { verifiedAuths } = await zkConnect.verify(zkConnectResponse, {
      claimRequest: { groupId: config.appId },
      authRequest: { authType: AuthType.ANON },
      messageSignatureRequest: signedMessage,
    });

    const anonUserId = verifiedAuths[0].userId;
    if (!anonUserId) {
      throw new Error("INVALID_VOTE_SIGNATURE");
    }
    res.status(200).json({ vaultId: anonUserId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
