import { View } from "react-native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";
import { StackRoutesProps } from "@/routes/StackRoute";
import { useRoute } from "@react-navigation/native";

type RouteParams = StackRoutesProps<"product">

export function Product({ navigation }: StackRoutesProps<"product">) {
  const { params } = useRoute<RouteParams["route"]>()
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon name="arrow-circle-left" onPress={() => navigation.navigate("home")} />
        {/*<Title>Product {route.params?.id}</Title> */}
        <Title>Product {params?.id}</Title>
      </Header>
    </View>
  )
}