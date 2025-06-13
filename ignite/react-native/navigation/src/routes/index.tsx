import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoute";
import { TabRoutes } from "./TabRoute";

export function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer >
  )
}