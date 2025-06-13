import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./DrawerRoute";

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer >
  )
}