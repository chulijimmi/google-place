import { merge } from "rxjs";
import appEpic from "./features/app/appEpic";
import googleMaps from "./middlewares/googleMaps";

const rootEpic = (action$, state$) =>
  merge(appEpic(action$, state$), googleMaps.get(action$, state$));

export default rootEpic;
