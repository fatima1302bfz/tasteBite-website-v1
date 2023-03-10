import Head from "next/head";
import axios from "../../axios";
import { CommentType, RecipeType } from "@/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import RecipeDetails from "../../components/recipe-details/RecipeDetails";
import { applyFetchComments } from "@/utils/applyFetchComments";
import { createContext } from "react";
// share context
export const RecipeCTX = createContext<any>({});

const Recipe = () => {
  const { query, isReady } = useRouter();
  const { id } = query;
  const [singleRecipe, setSingleRecipe] = useState<any>({});
  const [similar, setSimilar] = useState<RecipeType[]>([]);
  const [allComments, setAllComments] = useState<CommentType[]>([]);

  const fetchSingleRecipe = async (id: any) => {
    // fetch single recipe
    const request = await axios(
      `/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    setSingleRecipe(request.data);
    // fetch similar recipes
    const getSimilar = await axios(
      `/${id}/similar?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    setSimilar(getSimilar.data);
    //fetch all comments
    const getComments: CommentType[] = await applyFetchComments(id);
    setAllComments(getComments);
  };
  useEffect(() => {
    if (isReady) {
      fetchSingleRecipe(id);
    } else {
      <p>Loading</p>;
    }
  }, [id, isReady]);

  // method to refresh comments
  const refreshComments = async () => {
    // @ts-ignore
    const newListComments: CommentType[] = await applyFetchComments(id);
    setAllComments(newListComments);
  };
  // data to share with context
  const shareData = {
    recipe: singleRecipe,
    similar: similar,
    comments: allComments,
    refreshComments: refreshComments,
  };
  return (
    <>
      <Head>
        <title>{singleRecipe?.title}</title>
        <meta
          name="description"
          content="Food recipes website created with nextJs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RecipeCTX.Provider value={shareData}>
        <RecipeDetails />
      </RecipeCTX.Provider>
    </>
  );
};

export default Recipe;
