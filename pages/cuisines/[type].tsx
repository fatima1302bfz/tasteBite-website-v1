import picked from "@/data";
import Head from "next/head";
import axios from "../../axios";
import { RecipeType } from "@/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CuisineDetails from "@/components/cuisine-details/CuisineDetails";

const CuisineType = () => {
  const { query, isReady } = useRouter();
  const { type } = query;
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  const fetchCuisine = async (type: string | string[] | undefined) => {
    const checkStorage = localStorage.getItem(`${type}`);
    if (checkStorage) {
      setRecipes(JSON.parse(checkStorage));
    } else {
      const request = await axios.get(
        `${picked.fetchComplexSearch}&number=19&cuisine=${type}`
      );
      localStorage.setItem(`${type}`, JSON.stringify(request.data.results));
      setRecipes(request.data.results);
    }
  };
  useEffect(() => {
    fetchCuisine(type);
  }, [type]);

  return (
    <>
      <Head>
        <title>{type} cuisine</title>
        <meta
          name="description"
          content="Food recipes website created with nextJs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section style={{ position: "relative" }}>
        <div className="container">
          {isReady ? (
            <CuisineDetails recipes={recipes} type={type} />
          ) : (
            <p
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "red",
                marginTop: "150px",
              }}
            >
              Loading...
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default CuisineType;
