import React from "react"
import { createBrowserRouter } from "react-router-dom"

/**
 * Code splitting components by features
 */
const Error404 = React.lazy(() => import('./features/error404/Error404'))
const App = React.lazy(() => import('./features/app/App'))
const Home = React.lazy(() => import('./features/home/Home'))
const Theme = React.lazy(() => import('./features/theme/Theme'))

const routeConfig = [
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/theme",
        element: <Theme/>
    }
]

const router = createBrowserRouter(routeConfig)
export default router