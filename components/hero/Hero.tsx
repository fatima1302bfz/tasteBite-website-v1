import picked from "@/data";
import Link from "next/link";
import axios from "../../axios";
import "@splidejs/react-splide/css";
import { RecipeType } from "@/types";
import Classes from "./hero.module.css";
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Hero = () => {
  const [slides, setSlides] = useState<RecipeType[]>([]);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const fetchSlides = async () => {
    const checkStorage = localStorage.getItem("slideRecipes");
    if (checkStorage) {
      setSlides(JSON.parse(checkStorage));
      setIsLoad(true);
    } else {
      const request = await axios.get(picked.fetchComplexSearch);

      localStorage.setItem(
        "slideRecipes",
        JSON.stringify(request.data.results)
      );
      setSlides(request.data.results);
      setIsLoad(true);
    }
  };
  useEffect(() => {
    fetchSlides();
  }, []);

  return (
    <section className={Classes["hero-section"]}>
      <div className="container">
        {isLoad && (
          <Splide
            options={{
              perPage: 1,
              pagination: false,
              gap: "20px",
              type: "loop",
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              drag: "free",
              speed: 2000,
            }}
            aria-label="recipes Images"
          >
            {slides?.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <Link href={`/recipe/${recipe.id}`}>
                  <div
                    className={Classes["hero"]}
                  >
                    <img src={recipe.image} alt={recipe.title} />
                    <div className={Classes["text"]}>
                      <div className={Classes["lead"]}>
                        <h1>{recipe.title}</h1>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </section>
  );
};

export default Hero;
