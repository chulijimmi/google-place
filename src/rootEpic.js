import { merge } from "rxjs";
import appEpic from "./features/app/appEpic";
import googleMaps from "./middlewares/googleMaps";

const rootEpic = (action$, state$, dependencies$) =>
  merge(
    appEpic(action$, state$, dependencies$),
    googleMaps.get(action$, state$, dependencies$)
  );

export default rootEpic;
