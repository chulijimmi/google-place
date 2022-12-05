import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";
import { ping, pong } from "./appSlice";

const appEpic = (action$) => {
  return action$.pipe(
    ofType(pong().type),
    delay(500),
    map(() => ping(true))
  );
};

export default appEpic;
