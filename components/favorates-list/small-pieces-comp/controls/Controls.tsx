import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import classes from "./controls.module.css";
import { CgRadioCheck } from "react-icons/cg";

interface Props {
  nbTotalFav: number;
}
const Controls = ({ nbTotalFav }: Props) => {
  return (
    <ul className={classes["controls"]}>
      <li>({nbTotalFav} favorate)</li>
      <li>
        <FaRegEdit />
        select
      </li>
      <li>
        <CgRadioCheck />
        all
      </li>
      <li>
        <BsTrash3 />
        delete
      </li>
    </ul>
  );
};

export default Controls;
