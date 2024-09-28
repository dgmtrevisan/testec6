import { spaceFlightNewsApiURL } from "@constants/constants";
import { NextApiRequest, NextApiResponse } from "next";
import queryString from 'query-string';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const paramsObj = queryString.stringify(query);

  try {
    let response = await fetch(`${spaceFlightNewsApiURL}?${paramsObj}`);  
    let data = await response.json();

    if (data.results.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Posts not found' });  
    }
  } catch (error) {
    res.status(404).json({ message: 'Posts not found' });
  }
};
