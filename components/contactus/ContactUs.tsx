import React from "react";
import classes from "./contact.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  const socialIcon = [
    {icon: <FaFacebookF style={{ fontSize: "1.3em" }}/>},
    {icon: <FaTwitter style={{ fontSize: "1.3em" }}/>},
    {icon: <FaInstagram style={{ fontSize: "1.3em" }}/>},
  ];
  return (
    <div className="container">
      <div className={classes["contact"]}>
        <h2>Get in touch</h2>

        <form>
          <ul>
            <li>
              <label htmlFor="name">
                Name <span className={classes["required-star"]}>*</span>
              </label>
              <input type="text" id="name" name="user_name" required />
            </li>
            <li>
              <label htmlFor="mail">
                Email <span className={classes["required-star"]}>*</span>
              </label>
              <input type="email" id="mail" name="user_email" required />
            </li>
            <li>
              <label htmlFor="msg">Message</label>
              {/* @ts-ignore */}
              <textarea rows="4" cols="50"></textarea>
            </li>
          </ul>
          <div className={classes["submition"]}>
            <button>send</button>
            <ul className={classes["social-menu"]}>
              {socialIcon.map((icon, index) => (
                <li key={index}>
                  <a href="">
                    {socialIcon[index].icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
