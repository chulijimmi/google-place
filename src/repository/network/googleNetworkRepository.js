import { catchError, map, of } from "rxjs";
import { apiUrl, apiKey, apiService } from "../../config/appConfig";
import transform from "../../util/transform";
import { GetGoogleNetworkStruct } from "./struct/googleNetworkStruct";

const get = (httpMethod, payload) => {
  const url = `${apiUrl.googleMaps}${apiService.googleMaps}?input=${payload}&types=geocode&key=${apiKey.googleMaps}`;
  try {
    return httpMethod(url).pipe(
      map((ajaxResponse) => ({
        code: ajaxResponse.response.status === "OK" ? 200 : 500,
        data: transform.arr(
          ajaxResponse.response.predictions,
          new GetGoogleNetworkStruct()
        ),
        message: ajaxResponse.response.error_message
      })),
      catchError((error) =>
        of({
          code: error.status,
          data: [],
          message: error.message
        })
      )
    );
  } catch (error) {
    return error;
  }
};

const googleNetworkRepository = {
  get
};

export default googleNetworkRepository;
