import { createContext } from "react";
import { app, auth, db } from "../Firebase/Config";

export const FirebaseContext = createContext({
  app: app,
  auth: auth,
  db: db,
});
