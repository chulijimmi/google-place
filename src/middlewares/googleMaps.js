import { ofType } from "redux-observable";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mergeMap
} from "rxjs";
import {
  setSearch,
  setPlaces,
  setErrorMessage
} from "../features/feed/feedSlice";
import googleNetworkRepository from "../repository/network/googleNetworkRepository";

const get = (action$, $state, { get }) =>
  action$.pipe(
    filter((action$) => action$.payload && action$.payload.length > 0),
    ofType(setSearch().type),
    debounceTime(1000),
    distinctUntilChanged(),
    mergeMap((action$) =>
      googleNetworkRepository.get(get, action$.payload).pipe(
        map((response) => {
          if (response.code !== 200) {
            return {
              type: setErrorMessage().type,
              payload: response.message
            };
          } else {
            return {
              type: setPlaces().type,
              payload: {
                predictions: response.data,
                visited: action$.payload
              }
            };
          }
        })
      )
    )
  );

const googleMaps = {
  get
};

export default googleMaps;
