import { Text, View } from "react-native";
import { Checkbox } from "expo-checkbox"
import { Trash2 } from "lucide-react-native";

import { styles } from "./styles"
import { TaskProps } from "@/app/Home";


type Props = {
  data: TaskProps
  onCheck: (check: boolean) => void
  onDelete: () => void
}

export function Item({ data, onCheck, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Checkbox value={data.isDone} onValueChange={onCheck} />
        <Text style={data.isDone ? styles.taskDone : styles.task} selectable>
          {data.content}
        </Text>
      </View>
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