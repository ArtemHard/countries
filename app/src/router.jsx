import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  // Routes,
  // Switch,
} from "react-router-dom";
import App from "./App";
// import { Header } from "./components/Header";
// import { Main } from "./components/Main";
// import { Home } from "./Home";
import { Details } from "./pages/Details";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/country/:name",
        element: <Details />,
      },
    ],
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
]);

/*
const router2 = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/country/:name' element={<Details />} />
          <Route
            path='/'
            element={<HomePage />}
            errorElement={<NotFound />}
          />{" "}
          *
        </Routes>
      </Main>
    </>
  )
);
*/
// export { router2 };

export default router;
