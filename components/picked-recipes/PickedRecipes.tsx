import Link from "next/link";
import axios from "../../axios";
import Card from "./cards/Card";
import "@splidejs/react-splide/css";
import { RecipeType } from "@/types";
import classes from "./picked.module.css";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

interface Props {
  title: string;
  endpoint: string;
}
const PickedRecipes = ({ title, endpoint }: Props) => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  useEffect(() => {
    fetchRecipes(endpoint, title);
  }, [endpoint, title]);

  const fetchRecipes = async (endpoint: string, title: string) => {
    const checkStorage = localStorage.getItem(`${title}`);
    if (checkStorage) {
      setRecipes(JSON.parse(checkStorage));
    } else {
      const request = await axios.get(endpoint);
      localStorage.setItem(`${title}`, JSON.stringify(request.data.recipes));
      setRecipes(request.data.recipes);
    }
  };
  return (
    <section className={classes["display"]}>
      <div className="container">
        <h3>{title}</h3>
        <Splide
          options={{
            perPage: 3,
            start: 0,
            pagination: false,
            gap: "20px",
            type: "loop",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            drag: "free",
            speed: 1000,
            breakpoints: {
              800: {
                perPage: 2,
                arrows: false,
              },
              500: {
                perPage: 1,
                arrows: false,
              },
            },
          }}
          aria-label="recipes Images"
        >
          {recipes?.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link href={`/recipe/${recipe.id}`}>
                <Card recipe={recipe} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default PickedRecipes;
