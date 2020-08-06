import githubSearch from "./githubSearch/reducers";
import auth from "../containers/Auth/_redux/reducer";
import firebase from "../containers/Firebase/_redux/reducer";
import profile from "../containers/Profile/_redux/reducer";
import notifications from "../containers/NotificationBar/_redux/reducer";
import enumsAndConstants from "../containers/EnumsAndConstants/_redux/reducer";

export default {
  githubSearch,
  firebase,
  profile,
  auth,
  notifications,
  enumsAndConstants,
};
