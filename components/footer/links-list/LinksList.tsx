import React from "react";
import classes from "./linksList.module.css";

const LinksList = () => {
  const linksHeaderList = ["tasteBit", "legal", "follow"];
  const listLinks = [
    ["about us", "contact us", "feedback"],
    ["terms", "conditions", "cookies", "copyright"],
    ["facebook", "twitter", "instagram", "youtube"],
  ];
  return (
    <div className={classes["links"]}>
      {linksHeaderList.map((item, index) => (
        <div className={classes["link-card"]} key={index}>
          <h3>{item}</h3>
          <ul className={classes["links-list"]}>
            {listLinks[index].map((link, index) => (
              <li className={classes["link-item"]} key={index}>
                <a href="" className={classes["link"]}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LinksList;
