import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  main: {
    paddingHorizontal: 12
  },
  input: {
    backgroundColor: "#262626",
    color: "#F2F2F2",
    padding: 16,
    marginTop: 14,
    width: "100%",
  },
  inputButton: {
    color: "#F2F2F2"
  },
  tasksStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 24,
  },
  tasksStatusInfo: {
    flexDirection: "row",
    gap: 8
  },
  tasksStatusInfoCreatedText: {
    color: "#4EA8DE",
  },
  tasksStatusInfoDoneText: {
    color: "#8284FA",
  },
  tasksStatusInfoNumber: {
    backgroundColor: "#333333",
    color: "#D9D9D9",
    fontWeight: "bold",
    borderRadius: 100,
    paddingHorizontal: 10
  },
  buttonCreateTask: {
    backgroundColor: "#1E6F9F",
    padding: 16,
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  listSeparator: {
    height: 1,
    backgroundColor: "0D0D0D"
  }
})