import { store } from "./store";
import authActions from "./auth/actions";
import enumActions from "../customApp/containers/EnumsAndConstants/_redux/actions";
import conf from "../customApp/config";
import axios from "axios";

export default () =>
  new Promise(() => {
    axios.defaults.baseURL = conf.baseURL;
    axios.interceptors.response.use(function(response) {
      return response.data;
    });
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const { status } = error.response;
        if (status === UNAUTHORIZED) {
          store.dispatch(authActions.logout());
        }
        return Promise.reject(error);
      }
    );

    store.dispatch(authActions.checkAuthorization());
    store.dispatch(enumActions.fetchEnums());
  });
