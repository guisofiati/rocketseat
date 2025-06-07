import { useState } from 'react';
import { Header } from '@/components/Header';
import { Item, TaskProps } from '@/components/Item';
import { NoTasks } from '@/components/NoTasks';
import { Alert, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { CirclePlus } from 'lucide-react-native';
import { styles } from "./styles"

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [input, setInput] = useState("")

  function handleCreateTask() {
    if (input.trim().length < 4) {
      Keyboard.dismiss()
      return Alert.alert("Erro", "Sua task deve ter no mínimo 5 caracteres.")
    }

    const newTask: TaskProps = {
      id: Math.random().toString(26).substring(2),
      task: input,
      isDone: false
    }

    setTasks(prev => [...prev, newTask])
    setInput("")
    Keyboard.dismiss()
  }

  function handleDeleteTask(id: string) {
    Alert.alert("Excluir", "Você realmente deseja excluir essa tarefa?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setTasks(tasks.filter(task => task.id !== id)) }
    ])
  }

  function handleTaskStatusChange(id: string, check: boolean) {
    setTasks(prev => prev.map(task =>
      task.id === id ? {
        ...task, isDone: check
      } : task
    ))
  }

  const tasksCompleted = tasks.filter(task => task.isDone).length

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa...'
            placeholderTextColor="#808080"
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.buttonCreateTask} activeOpacity={0.4} onPress={handleCreateTask}>
            <Text style={styles.inputButton}>
              Criar
            </Text>
            <CirclePlus size={14} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
        <View style={styles.tasksStatus}>
          <View style={styles.tasksStatusInfo}>
            <Text style={styles.tasksStatusInfoCreatedText}>Tarefas criadas:</Text>
            <Text style={styles.tasksStatusInfoNumber}>{tasks.length}</Text>
          </View>
          <View style={styles.tasksStatusInfo}>
            <Text style={styles.tasksStatusInfoDoneText}>Concluídas:</Text>
            <Text style={styles.tasksStatusInfoNumber}>{tasksCompleted} de {tasks.length}</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                task={item.task}
                isDone={item.isDone}
                onDelete={() => handleDeleteTask(item.id)}
                onCheck={(check) => handleTaskStatusChange(item.id, check)}
              />
            )
          }}
          ListEmptyComponent={<NoTasks />}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        />
      </View>
    </View >
  );
}
