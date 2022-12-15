import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import { Home } from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      <Route path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
    </>
  )
);

export { router2 };
export default router;
