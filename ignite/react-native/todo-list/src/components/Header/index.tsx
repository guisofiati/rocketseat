import { Rocket } from "lucide-react-native";
import { Text, View } from "react-native";

import { styles } from "./styles"
export function Header() {
  return (
    <View style={styles.container}>
      <Rocket size={30} color="#4EA8DE" />
      <Text style={styles.text}>todo</Text>
    </View>
  )
}