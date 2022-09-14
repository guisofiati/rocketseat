import { Image, View } from "react-native";

import LogoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={LogoImg}
        defaultSource={LogoImg}
        style={styles.logo}
      ></Image>

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
    </View>
  );
}
