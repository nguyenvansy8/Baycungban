import { slugs } from "../constants/slugs";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import { useRoutes } from "react-router-dom";
import FlightSchedule from "../pages/FlightSchedule";

const Routes = () => {
  const element = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: slugs.home,
          element: <Home />,
        },
        {
          path: slugs.flightSchedule,
          element: <FlightSchedule />,
        },
      ],
    },
  ]);
  return element;
};

export { Routes };
