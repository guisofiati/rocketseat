import { View } from "react-native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";
import { DrawerRoutesProps } from "@/routes/DrawerRoute";

export function Home({ navigation }: DrawerRoutesProps<"home">) {

  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon name="add-circle" onPress={() => navigation.navigate("product", { id: "7" })} />
        <Title>Home</Title>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
      </Header>
    </View>
  )
}