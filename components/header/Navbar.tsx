import Link from "next/link";
import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { FaSearch } from "react-icons/fa";
import Search from "../search-bar/Search";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

const links = ["Home", "about", "blog", "contact"];
interface Props {
  showSideMenu: boolean;
  setShowSideMenu: any;
}
const Navbar = ({ showSideMenu, setShowSideMenu }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const { data: session } = useSession();
  const [profileAvatar, setProfileAvatar] = useState("/avatar.png");

  ///////////////////// this for get prifile avatar from localStorage /////////////////////////
  useEffect(() => {
    const storage = localStorage.getItem("avatarSrc");
    if (typeof window !== "undefined") {
      // @ts-ignore
      let avatarsrc = JSON.parse(storage);
      setProfileAvatar(avatarsrc);
    }
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <header className={classes["header"]}>
      <div className="container">
        <div className={classes["nav-wrapper"]}>
            <img src="/logo.png" alt="TasteBite logo" className={classes.logo}/>
          <nav>
            <div
              className={
                showMenu
                  ? [classes["humberger"], classes["active-toggle"]].join(" ")
                  : classes["humberger"]
              }
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul
              className={
                showMenu
                  ? [classes["nav-menu"], classes["active-menu"]].join(" ")
                  : classes["nav-menu"]
              }
            >
              <li className={classes["nav-item"]}>
                <Link
                  href="/"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  {links[0]}
                </Link>
              </li>
              {links.slice(1, links.length).map((link, index) => (
                <li className={classes["nav-item"]} key={index}>
                  <Link
                    href={`/${link}`}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={classes["controls"]}>
              <span>
                <FaSearch
                  onClick={() => {
                    setShowSearchBar(!showSearchBar);
                  }}
                />
              </span>
              {session ? (
                <img
                  className={classes.avatar}
                  src={profileAvatar ? profileAvatar : "/avatar.png"}
                  alt="user-avatar"
                  onClick={() => {
                    setShowSideMenu(!showSideMenu);
                  }}
                />
              ) : (
                <button
                  onClick={() => {
                    signIn();
                  }}
                >
                  Login
                </button>
              )}

              {/* eslint-disable-next-line @next/next/no-img-element */}
            </div>
          </nav>
        </div>
        {showSearchBar && <Search />}
      </div>
    </header>
  );
};

export default Navbar;
