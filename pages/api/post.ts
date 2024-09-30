import { spaceFlightNewsApiURL } from "@constants/constants";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: Partial<NextApiResponse>) {
  const { query: { id } } = req;
  
  try {
    const response = await axios.get(`${spaceFlightNewsApiURL}${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Post not found' });
  }
};
