import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { useState } from "react";

const FILTER_STATUS: FilterStatus[] = [
  FilterStatus.PENDING,
  FilterStatus.DONE,
]

const ITEMS = [
  { id: "1", status: FilterStatus.DONE, description: "2 pacote de café" },
  { id: "2", status: FilterStatus.DONE, description: "1 escova de dente" },
  { id: "3", status: FilterStatus.PENDING, description: "3 sabonetes" },
  { id: "4", status: FilterStatus.PENDING, description: "1 sabão em pó" },
]

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING)
  const [description, setDescription] = useState("")
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" onChangeText={setDescription} />
        <Button title="Adicionar" />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map(status => {
            return (
              <Filter
                key={status}
                status={status}
                isActive={status === filter}
                onPress={() => setFilter(status)}
              />)
          })}
          <TouchableOpacity style={styles.clearButton} activeOpacity={0.3}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatusChange={() => console.log('changed')}
              onRemove={() => console.log('removed')}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.emptyList}>Nenhum item aqui.</Text>}
        />
      </View>
    </View>
  )
}
