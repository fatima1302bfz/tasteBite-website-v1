import React from "react";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { signOut } from "next-auth/react";
import { Modal, Box } from "@mui/material";
import classes from "./sideMenu.module.css";
import { IoExitOutline } from "react-icons/io5";
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs";

interface Props {
  showSideMenu: boolean;
  setShowSideMenu: any;
}
const SideMenu = ({ showSideMenu, setShowSideMenu }: Props) => {
  return (
    <Modal
      open={showSideMenu}
      onClose={setShowSideMenu}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <div
          className={
            showSideMenu
              ? [classes["side-menu"], classes["active-side"]].join(" ")
              : classes["side-menu"]
          }
        >
          <span
            className={classes["close"]}
            onClick={() => {
              setShowSideMenu(false);
            }}
          >
            <GrClose />
          </span>
          <ul className={classes["side"]}>
            <li>
              <BsFillPersonFill />
              <Link
                href="/profile"
                className={classes["side-item"]}
                onClick={() => {
                  setShowSideMenu(false);
                }}
              >
                profile
              </Link>
            </li>
            <li>
              <BsFillSuitHeartFill />
              <Link
                href="/favorate"
                className={classes["side-item"]}
                onClick={() => {
                  setShowSideMenu(false);
                }}
              >
                favorate
              </Link>
            </li>
          </ul>
          <div
            className={classes["logout"]}
            onClick={() => {
              signOut();
            }}
          >
            <IoExitOutline />
            Logout
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SideMenu;
