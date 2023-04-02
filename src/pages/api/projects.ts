// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../models/Project";
import projects from "../../data/projects.json" assert { type: "json" };

type Data = {
  data: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {
  try {
    res.status(200).json({ data: projects });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
