import { ClipboardList } from "lucide-react-native";
import { Text, View } from "react-native";

import { styles } from "./styles"

export function NoTasks() {
  return (
    <View style={styles.container}>
      <ClipboardList size={56} color="#333333" />
      <Text style={styles.textTitle}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.textParagraph}>Crie tarefas e organize itens a fazer</Text>
    </View>
  )
}