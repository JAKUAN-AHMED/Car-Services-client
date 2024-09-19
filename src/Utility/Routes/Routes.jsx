import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Components/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Checkout from "../../Pages/Checkout/Checkout";
import Services from "../../Components/Services/Services";
import Bookings from "../../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Error from "../../Pages/ErrroPage/Error";
import About from "../../Components/About/About";
const router = createBrowserRouter([
  {
    path: "",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;