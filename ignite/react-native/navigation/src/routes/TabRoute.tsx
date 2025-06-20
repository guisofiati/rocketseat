import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"

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
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2C46B1",
        tabBarInactiveTintColor: "#444444",
        tabBarLabelPosition: "beside-icon",
        // tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: "Produto",
          tabBarIcon: ({ color, size }) => <MaterialIcons name="add-circle" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}