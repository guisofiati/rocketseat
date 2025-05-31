import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";

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
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map(status => {
            return <Filter key={status} status={status} isActive />
          })}
          <TouchableOpacity style={styles.clearButton} activeOpacity={0.3}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        {/* <ScrollView>
          {ITEMS.map((value) => (
            <Item
              key={value}
              data={{ status: FilterStatus.DONE, description: value.toString() }}
              onStatusChange={() => console.log('changed')}
              onRemove={() => console.log('removed')}
            />
          ))}
        </ScrollView> */}
        <FlatList
          data={ITEMS}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Item
              // data={{ status: item.status, description: item.description }}
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
