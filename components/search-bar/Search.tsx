import { useRouter } from "next/router";
import React, { useState } from "react";
import classes from "./search.module.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router.push("/search/" + searchQuery);
  };
  return (
    <div className="container">
      <form className={classes["search-form"]} onSubmit={handleSubmit}>
        <FaSearch />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
