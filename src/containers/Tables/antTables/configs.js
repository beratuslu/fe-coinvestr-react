import React from "react";
import clone from "clone";
import IntlMessages from "../../../components/utility/intlMessages";
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell,
  RouterLinkCell,
} from "../../../components/tables/helperCells";

const renderCell = (object, type, key) => {
  const value = object[key];
  const url = object.userName ? `/dashboard/profile/${object.userName}` : null;
  switch (type) {
    case "ImageCell":
      return ImageCell(value, url);
    case "DateCell":
      return DateCell(value);
    case "LinkCell":
      return LinkCell(value);
    case "RouterLinkCell":
      return RouterLinkCell(value, url);
    default:
      return TextCell(value);
  }
};

const columns = [
  {
    title: <IntlMessages id="antTable.title.image" />,
    key: "avatar",
    width: "1%",
    className: "isoImageCell",
    render: (object) => renderCell(object, "ImageCell", "avatar"),
  },
  {
    title: <IntlMessages id="antTable.title.firstName" />,
    key: "firstName",
    width: 100,
    render: (object) => renderCell(object, "TextCell", "firstName"),
  },
  {
    title: <IntlMessages id="antTable.title.lastName" />,
    key: "lastName",
    width: 100,
    render: (object) => renderCell(object, "TextCell", "lastName"),
  },
  {
    title: <IntlMessages id="antTable.title.city" />,
    key: "city",
    width: 200,
    render: (object) => renderCell(object, "TextCell", "city"),
  },
  {
    title: <IntlMessages id="antTable.title.street" />,
    key: "street",
    width: 200,
    render: (object) => renderCell(object, "TextCell", "street"),
  },
  {
    title: <IntlMessages id="antTable.title.email" />,
    key: "email",
    width: 200,
    render: (object) => renderCell(object, "LinkCell", "email"),
  },
  {
    title: <IntlMessages id="antTable.title.dob" />,
    key: "date",
    width: 200,
    render: (object) => renderCell(object, "DateCell", "date"),
  },
];
const smallColumns = [columns[1], columns[2], columns[3], columns[4]];
const sortColumns = [
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: true },
  { ...columns[4], sorter: true },
];
const editColumns = [
  { ...columns[1], width: 300 },
  { ...columns[2], width: 300 },
  columns[3],
  columns[4],
];
const groupColumns = [
  columns[0],
  {
    title: "Name",
    children: [columns[1], columns[2]],
  },
  {
    title: "Address",
    children: [columns[3], columns[4]],
  },
];
const tableinfos = [
  {
    title: "Simple Table",
    value: "simple",
    columns: clone(smallColumns),
  },
  {
    title: "Sortable Table",
    value: "sortView",
    columns: clone(sortColumns),
  },
  {
    title: "Search Text",
    value: "filterView",
    columns: clone(smallColumns),
  },
  {
    title: "Editable View",
    value: "editView",
    columns: clone(editColumns),
  },
  {
    title: "Grouping View",
    value: "groupView",
    columns: clone(groupColumns),
  },
  {
    title: "Customized View",
    value: "customizedView",
    columns: clone(columns),
  },
];

const allUsers = {
  columns: [
    {
      title: "Photo",
      key: "profilePhoto",
      width: "1%",
      className: "isoImageCell",
      render: (object) => renderCell(object, "ImageCell", "profilePhoto"),
    },
    {
      title: "User Name",
      key: "userName",
      width: 100,
      className: "isoImageCell",
      render: (object) => renderCell(object, "RouterLinkCell", "userName"),
    },
    {
      title: "Name",
      key: "name",
      width: 200,
      render: (object) => renderCell(object, "TextCell", "name"),
    },
    {
      title: "Lastname",
      key: "lastName",
      width: 200,
      render: (object) => renderCell(object, "TextCell", "lastName"),
    },
  ],
};
export { columns, tableinfos, allUsers };
