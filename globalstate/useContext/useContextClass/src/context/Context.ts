import { createContext } from "react";
import type { User } from "../App";

export const UserContext = createContext<User | undefined>(undefined);
