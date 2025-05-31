import { View, Text, TouchableOpacity } from "react-native"
import { Trash2 } from "lucide-react-native"
import { StatusIcon } from "../StatusIcon"

import { styles } from "./styles"
import { FilterStatus } from "@/types/FilterStatus"

type ItemData = {
  status: FilterStatus,
  description: string
}

type Props = {
  data: ItemData
  onRemove: () => void
  onStatusChange: () => void
}

export function Item({ data, onRemove, onStatusChange }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatusChange}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>
      <Text style={styles.description}>
        {data.description}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  )
}