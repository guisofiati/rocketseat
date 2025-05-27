import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   text: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "blue"
//   }
// })
