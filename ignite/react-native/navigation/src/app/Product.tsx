import { View } from "react-native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";
import { StackRoutesProps } from "@/routes/StackRoute";

export function Product({ navigation }: StackRoutesProps<"product">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon name="arrow-circle-left" onPress={() => navigation.navigate("home")} />
        <Title>Product</Title>
      </Header>
    </View>
  )
}