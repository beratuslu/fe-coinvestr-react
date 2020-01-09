import { store } from "./store";
import authActions from "./auth/actions";
import conf from "../customApp/config";
import axios from "axios";

export default () =>
  new Promise(() => {
    axios.defaults.baseURL = conf.baseURL;
    axios.interceptors.response.use(function(response) {
      return response.data;
    });
    store.dispatch(authActions.checkAuthorization());
  });
