import { merge } from "rxjs";
import appEpic from "./features/app/appEpic";

const rootEpic = (action$, state$) => merge(appEpic(action$, state$));

export default rootEpic;
