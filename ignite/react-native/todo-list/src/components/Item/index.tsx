import { Text, View } from "react-native";
import { Checkbox } from "expo-checkbox"
import { Trash2 } from "lucide-react-native";

import { styles } from "./styles"

export type TaskProps = {
  id: string
  task: string,
  isDone: boolean
  onDelete?: () => void
  onCheck?: (check: boolean) => void
}

export function Item({ task, isDone, onDelete, onCheck }: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox value={isDone} onValueChange={onCheck} />
      <Text style={isDone ? styles.taskDone : styles.task}>
        {task}
      </Text>
      <Trash2
        size={16}
        color="#808080"
        title="Deletar tarefa"
        aria-label="Deletar tarefa"
        onPress={onDelete}
      />
    </View>
  )
}