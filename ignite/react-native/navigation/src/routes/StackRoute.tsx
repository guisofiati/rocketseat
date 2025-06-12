import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackRoutesList = {
  home: undefined
  product: undefined
}

export type StackRoutesProps<T extends keyof StackRoutesList> = NativeStackScreenProps<StackRoutesList, T>

const Stack = createNativeStackNavigator<StackRoutesList>()
// por default a ordem de renderizar é a sequencia declarada dentro de stack navigator
// se quiser explicitar, so passar a prop initialRouteName
export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="home"
        component={Home}
      // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="product"
        component={Product}
      // options={{ headerTitle: "Tela de produtos" }}
      />
    </Stack.Navigator>
  )
}