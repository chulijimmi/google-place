import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

/**
 * Code splitting components by features
 */
const PageLayout = React.lazy(() => import("./layout/PageLayout"));
const Error404 = React.lazy(() => import("./features/error404/Error404"));
const App = React.lazy(() => import("./features/app/App"));
const Feed = React.lazy(() => import("./features/feed/Feed"));
const Setting = React.lazy(() => import("./features/setting/Setting"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<App />}></Route>
      <Route element={<PageLayout />} errorElement={<Error404 />}>
        <Route path="feed" element={<Feed />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </React.Fragment>
  )
);
export default router;
