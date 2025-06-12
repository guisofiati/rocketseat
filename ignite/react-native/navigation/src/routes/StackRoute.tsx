import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()
// por default a ordem de renderizar é a sequencia declarada dentro de stack navigator
// se quiser explicitar, so passar a prop initialRouteName
export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="product"
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