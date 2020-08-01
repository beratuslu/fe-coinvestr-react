import githubSearch from "./githubSearch/reducers";
import auth from "../containers/Auth/_redux/reducer";
import firebase from "../containers/Firebase/_redux/reducer";
import profile from "../containers/Profile/_redux/reducer";
import notif from "../containers/Notif/_redux/reducer";

export default { githubSearch, firebase, profile, auth, notif };
