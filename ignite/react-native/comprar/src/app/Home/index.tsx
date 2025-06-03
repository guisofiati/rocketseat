import { View, Image, TouchableOpacity, Text, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { useEffect, useState } from "react";
import { itemStorage, ItemStorage, } from "@/storage/itemsStorage";

const FILTER_STATUS: FilterStatus[] = [
  FilterStatus.PENDING,
  FilterStatus.DONE,
]

export function Home() {
  const [items, setItems] = useState<ItemStorage[]>([])
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING)
  const [description, setDescription] = useState("")

  async function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.")
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING
    }

    // setItems((prevState) => [...prevState, newItem])
    await itemStorage.add(newItem)
    await getItems()
    // setDescription("")
  }

  async function getItems() {
    try {
      const response = await itemStorage.get()
      setItems(response)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível filtrar os itens.")
    }
  }

  useEffect(() => {
    // se fosse usar a função do itemStorage.get() aqui, teria que usar o .then depois, pois
    // useEffect n tem como ser async 
    getItems()
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" onChangeText={setDescription} value={description} />
        <Button title="Adicionar" onPress={handleAddItem} />
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
          data={items}
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
