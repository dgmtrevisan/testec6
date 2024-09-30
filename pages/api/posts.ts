import { spaceFlightNewsApiURL } from "@constants/constants";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import queryString from 'query-string';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const paramsObj = queryString.stringify(query);

  try {
    const response = await axios.get(`${spaceFlightNewsApiURL}?${paramsObj}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Posts not found' });
  }
};
