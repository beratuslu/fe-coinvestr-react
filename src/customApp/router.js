import asyncComponent from "../helpers/AsyncFunc";

const routes = [
  {
    path: "githubSearch",
    component: asyncComponent(() => import("./containers/GithubSearch")),
  },
  {
    path: "githubSearch",
    component: asyncComponent(() => import("./containers/GithubSearch")),
  },
  {
    path: "blank_page",
    component: asyncComponent(() => import("./containers/blankPage")),
  },
  {
    path: "profile/:userName",
    component: asyncComponent(() => import("../containers/Profile/Profile")),
    exact: true,
  },
  {
    path: "profile/:userName/edit-copy",
    component: asyncComponent(() =>
      import("../containers/Profile/CopyCreateOrUpdate/CopyCreateOrUpdate")
    ),
    exact: false,
  },
];
export default routes;
