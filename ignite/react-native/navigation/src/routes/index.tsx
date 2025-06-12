import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoute";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer >
  )
}