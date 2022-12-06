import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { BehaviorSubject } from "rxjs";
import { switchMap } from "rxjs/operators";
import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";
import { ajax } from "rxjs/ajax";

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    get: ajax.get,
    post: ajax.post,
    del: ajax.delete,
    put: ajax.put
  }
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware)
});
const epic$ = new BehaviorSubject(rootEpic);
const hotReloadingEpic = (...args) =>
  epic$.pipe(switchMap((epic) => epic(...args)));
epicMiddleware.run(hotReloadingEpic);

if (module.hot) {
  module.hot.accept("./rootEpic.js", () => {
    const nextRootEpic = require("./rootEpic.js").rootEpic;
    epic$.next(nextRootEpic);
  });
}

export default store;
