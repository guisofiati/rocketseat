import { View } from "react-native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";
import { TabRoutesProps } from "@/routes/TabRoute";

export function Home({ navigation }: TabRoutesProps<"home">) {

  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon name="add-circle" onPress={() => navigation.navigate("product", { id: "7" })} />
      </Header>
    </View>
  )
}