import React from "react";
import classes from "./footer.module.css";
import LinksList from "./links-list/LinksList";

const Footer = () => {
  const socialIcon = [
    "fa-brands fa-facebook-f",
    "fa-brands fa-twitter",
    "fa-brands fa-instagram",
    "fa-brands fa-youtube",
  ];

  return (
    <footer className={classes["footer"]}>
      <div className="container">
        <div className={classes["top-wrapper"]}>
          <div className={classes["description"]}>
            <img src="/logo.png" alt="tasteBite logo" className={classes.logo}/>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo animi esse dolor, tempora fuga a iure, at delectus
              minima sed quo eum error! Ut dicta amet eos voluptate hic
              incidunt?
            </p>
          </div>
          <LinksList />
        </div>
        <div className={classes["bottom-wrapper"]}>
          <p>@2023 Tastebite - all right reserved</p>
          <ul className={classes["social-menu"]}>
            {socialIcon.map((icon, index) => (
              <li key={index}>
                <a href="">
                  <i className={icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
