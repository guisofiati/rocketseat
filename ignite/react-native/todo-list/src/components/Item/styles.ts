import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 10,
  },
  content: {
    flexDirection: "row",
    gap: 14
  },
  task: {
    color: "#F2F2F2"
  },
  taskDone: {
    color: "#808080",
    textDecorationLine: "line-through"
  }
})