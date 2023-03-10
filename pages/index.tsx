import picked from "@/data";
import Head from "next/head";
import Hero from "@/components/hero/Hero";
import Cuisine from "@/components/cuisine/Cuisine";
import PickedRecipes from "@/components/picked-recipes/PickedRecipes";

const Home = () => {
  return (
    <>
      <Head>
        <title>TasteBite</title>
        <meta name="description" content="Food recipes website created with nextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ paddingBottom: "60px" }}>
        <Hero />
        <PickedRecipes
          title={"super delicious"}
          endpoint={picked.fetchPopular}
        />
        <PickedRecipes title={"sweet tooth"} endpoint={picked.fetchDessert} />
        <Cuisine />
      </main>
    </>
  );
};
export default Home;
