import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus"

const ITEMS_STORAGE_KEY = "@comprar:items"

export type ItemStorage = {
  id: string
  status: FilterStatus,
  description: string
}

async function get(): Promise<ItemStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
    return storage ? JSON.parse(storage) : []
  } catch (error) {
    throw new Error(`ITEMS_GET: Erro ao obter itens do armazenamento. ${error}`)
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
  const items = await get()
  return items.filter(item => item.status === status)
}

async function save(items: ItemStorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
  } catch (error) {
    throw new Error(`ITEMS_SAVE: Erro ao salvar itens no armazenamento. ${error}`)
  }
}

async function add(item: ItemStorage): Promise<ItemStorage[]> {
  const items = await get()
  const updatedItems = [...items, item]
  await save(updatedItems)
  return updatedItems
}

async function remove(id: string): Promise<void> {
  const items = await get()
  const updatedItems = items.filter(item => item.id !== id)
  await save(updatedItems)
}

export const itemStorage = {
  get,
  getByStatus,
  add,
  remove
}
