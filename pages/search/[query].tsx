import picked from "@/data";
import Head from "next/head";
import axios from "../../axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import CuisineDetails from "@/components/cuisine-details/CuisineDetails";

const SearchResult = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const { query, isReady } = useRouter();
  const searchedQuery = query.query;
  const fetchSearched = async () => {
    const request = await axios(
      `${picked.fetchComplexSearch}&number=19&query=${searchedQuery}`
    );
    setSearchedRecipes(request.data.results);
  };

  useEffect(() => {
    if (isReady) {
      fetchSearched();
    } else {
      <p>Loading</p>;
    }
  }, [searchedQuery, isReady]);
  return (
    <>
      <Head>
        <title>{searchedQuery} recipes</title>
        <meta
          name="description"
          content="Food recipes website created with nextJs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CuisineDetails recipes={searchedRecipes} type={searchedQuery} />
    </>
  );
};

export default SearchResult;
