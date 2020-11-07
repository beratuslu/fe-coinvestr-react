import React from "react";
import { Link } from "react-router-dom";
import ImageCellView from "./imageCell";
import DeleteCell from "./deleteCell";
import EditableCell from "./editableCell";
import FilterDropdown from "./filterDropdown";

const DateCell = (data) => <p>{data.toLocaleString()}</p>;
const ImageCell = (src, url) => <ImageCellView src={src} url={url} />;
const LinkCell = (link, href) => <a href={href ? href : "#"}>{link}</a>;
const RouterLinkCell = (text, url) => <Link to={url}>{text}</Link>;
const TextCell = (text) => <p>{text}</p>;

export {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell,
  EditableCell,
  DeleteCell,
  FilterDropdown,
  RouterLinkCell,
};
