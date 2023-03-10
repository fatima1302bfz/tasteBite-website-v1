// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CommentBody } from '@/types';

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const comment: CommentBody = JSON.parse(req.body);
    const mutations = {
        mutations: [
            {
                create: {
                    _type: "comment",
                    comment: comment.comment,
                    username: comment.username,
                    userAvatar: comment.userAvatar,
                    recipeID: comment.recipeID,
                    blockComment: false
                },
            },
        ],
    };

    const apiURL =  `https://${process.env.NEXT_PUBLIC_SANITY_PROJECTID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
    const result = await fetch(apiURL, {
        headers: {
            "content-type" : 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`
        },
        method: 'POST',
        body: JSON.stringify(mutations)
    })

    const dataComment = result.json();

  // http://localhost:3000/api/addComment  Post Request
  // username, profileImage, content
  res.status(200).json({ message: 'DONE' })
}
