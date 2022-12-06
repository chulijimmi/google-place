import { ofType } from "redux-observable";
import { delay, map, mergeMap } from "rxjs";
import api from "../config/api";
import {
  setSearch,
  setPlaces,
  setErrorMessage
} from "../features/feed/feedSlice";

const url = "https://maps.googleapis.com/maps/api/place/autocomplete/json";

const get = (action$, $state, { get }) =>
  action$.pipe(
    ofType(setSearch().type),
    delay(500),
    mergeMap((action$) =>
      get(
        `${url}?input=${action$.payload}&types=geocode&key=${api.googleMaps}`
      ).pipe(
        map((httpResponse) => {
          if (httpResponse.response.status !== "OK") {
            return {
              type: setErrorMessage().type,
              payload: httpResponse.response.error_message
            };
          } else {
            return {
              type: setPlaces().type,
              payload: {
                predictions: httpResponse.response.predictions,
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
