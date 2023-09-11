import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { PublicRoutes } from "./public.routes";
import NavBar from "../components/NavBar";

export function Router() {
  return (
    <NavigationContainer>
      <PublicRoutes />
      <NavBar />
    </NavigationContainer>
  );
}
