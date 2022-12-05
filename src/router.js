import React from "react";
import { createBrowserRouter } from "react-router-dom";

/**
 * Code splitting components by features
 */
const Error404 = React.lazy(() => import("./features/error404/Error404"));
const App = React.lazy(() => import("./features/app/App"));
const Feed = React.lazy(() => import("./features/feed/Feed"));
const Setting = React.lazy(() => import("./features/setting/Setting"));

const routeConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />
  },
  {
    path: "/feed",
    element: <Feed />
  },
  {
    path: "/setting",
    element: <Setting />
  }
];

const router = createBrowserRouter(routeConfig);
export default router;
