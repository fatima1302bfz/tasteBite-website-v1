import { CommentType } from "@/types";

export const applyFetchComments = async (recipeID: string ): Promise<CommentType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}api/getComments?recipeID=${recipeID}`);
    const data = await res.json();
    const comments: CommentType[] = data.comments;
    return comments;
}