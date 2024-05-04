    import { createBrowserRouter,   } from "react-router-dom";
    import Browse from "./Browse";
    import Login from "./Login";
    import { RouterProvider } from "react-router-dom";
    import MovieDetails from "./MovieDetails"
    import { useDispatch } from "react-redux";

    const Body = () => {
        const appRouter = createBrowserRouter([
            {
                path: "/",
                element:<Login/>
            },
            {
                path: "/browse",
                element:<Browse/>
            },
            {
                path: "/details",
                element:<MovieDetails/>
            }
        ])


        return (
            <div className="overflow-x-hidden">
                <RouterProvider router={appRouter}/>
            </div>
        )
    }
    export default Body;