import Link from "next/link";
import "@splidejs/react-splide/css";
import classes from "./cuisine.module.css";
import CuisineCard from "./cuisineCard/CuisineCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Cuisine = () => {
  const cuisineList = [
    { cuisine: "african", image: "/cuisineImg/african.jpg" },
    { cuisine: "italian", image: "/cuisineImg/italian.jpg" },
    { cuisine: "mexican", image: "/cuisineImg/mexican.jpg" },
    { cuisine: "american", image: "/cuisineImg/american.jpg" },
    { cuisine: "thai", image: "/cuisineImg/thai.jfif" },
    { cuisine: "japanese", image: "/cuisineImg/japanese.jfif" },
    { cuisine: "mediterranean", image: "/cuisineImg/mediterranean.jpg" },
    { cuisine: "spanish", image: "/cuisineImg/spanish.jpg" },
    { cuisine: "french", image: "/cuisineImg/french.jpg" },
    { cuisine: "indian", image: "/cuisineImg/indian.jpg" },
    { cuisine: "greek", image: "/cuisineImg/greek.jpg" },
    { cuisine: "caribbean", image: "/cuisineImg/caribbean.jpg" },
  ];
  return (
    <section className={classes["cuisine"]}>
      <div className="container">
        <h3>Popular cuisines</h3>
        <Splide
          options={{
            perPage: 6,
            pagination: false,
            gap: "20px",
            pauseOnHover: false,
            resetProgress: false,
            drag: "free",
            speed: 1000,
            breakpoints: {
              900: {
                perPage: 4,
                arrows: false,
              },
              800: {
                perPage: 3,
                arrows: false,
              },
              500: {
                perPage: 2,
                arrows: false,
              },
            },
          }}
          aria-label="recipes Images"
        >
          {cuisineList?.map((cuisine, index) => (
            <SplideSlide key={index}>
              <Link href={`/cuisines/${cuisine.cuisine}`}>
                <CuisineCard cuisine={cuisine} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Cuisine;
