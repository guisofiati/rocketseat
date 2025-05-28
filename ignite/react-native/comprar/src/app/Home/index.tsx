import { View, Image } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";

export function Home() {
  //       <Image source={require("../../assets/logo.png")} style={styles.logo} />
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <Button title="Adicionar" onPress={() => console.log("test")} />
    </View>
  )
}
