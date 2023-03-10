import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity';
import client from '@/client';
import { CommentType } from '@/types';
const commentQuery = groq`
    *[_type == 'comment' && recipeID == $recipeID && !blockComment]{
        _id,
        ...
    } | order(_createdAt desc)
`;

type Data = {
  comments: CommentType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) { 
    //http://localhost:3000/api/comments?recipeID=985741
  const { recipeID } = req.query;
  const comments: CommentType[] = await client.fetch(commentQuery,{recipeID})
  res.status(200).json({ comments })
}