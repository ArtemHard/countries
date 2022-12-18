import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import { Home } from "./Home";
import { Details } from "./pages/Details";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>InnaX Error</div>,
    children: [
      {
        path: "deneme",
        element: <div> Deneme Hyeta</div>,
      },
      {
        path: "test",
        element: <div>test hyeta</div>,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage />} errorElement={<NotFound />} />
      <Route path='/country/:name' element={<Details />} />
    </>
  )
);

export { router2 };
export default router;
