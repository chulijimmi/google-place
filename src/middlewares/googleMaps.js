import { ofType } from "redux-observable";
import { delay, map, mergeMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import api from "../config/api";
import { setSearch, setPlaces } from "../features/feed/feedSlice";

const url = "https://maps.googleapis.com/maps/api/place/autocomplete/json";

const get = (action$) =>
  action$.pipe(
    ofType(setSearch().type),
    delay(500),
    mergeMap((action$) =>
      ajax
        .get(
          `${url}?input=${action$.payload}&types=geocode&key=${api.googleMaps}`
        )
        .pipe(
          map((httpResponse) => ({
            type: setPlaces().type,
            payload: httpResponse.response.predictions
          }))
        )
    )
  );

const googleMaps = {
  get
};

export default googleMaps;
