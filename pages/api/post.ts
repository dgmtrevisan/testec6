import { spaceFlightNewsApiURL } from "@constants/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query: { id } } = req;
  
  try {
    let response = await fetch(`${spaceFlightNewsApiURL}${id}`);  
    let data = await response.json();

    if (data.id) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Post not found' });  
    }
  } catch (error) {
    res.status(404).json({ message: 'Post not found' });
  }
};
