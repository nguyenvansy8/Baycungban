import { slugs } from "./slugs";
import { v4 as uuidv4 } from "uuid";

export const navMenuItems = [
  {
    id: uuidv4(),
    title: "Promotion",
  },
  {
    id: uuidv4(),
    title: "Flight Schedule",
    slug: slugs.flightSchedule,
  },
  {
    id: uuidv4(),
    title: "About us",
  },
  {
    id: uuidv4(),
    title: "Payment Guide",
  },
];
