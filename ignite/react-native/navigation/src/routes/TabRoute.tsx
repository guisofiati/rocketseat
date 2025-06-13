import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type TabRouteList = {
  home: undefined
  product: undefined | { id: string }
}

export type TabRoutesProps<T extends keyof TabRouteList> = BottomTabScreenProps<TabRouteList, T>

const Tab = createBottomTabNavigator<TabRouteList>()
export function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="home"
        component={Home}
      />
      <Tab.Screen
        name="product"
        component={Product}
      />
    </Tab.Navigator>
  )
}