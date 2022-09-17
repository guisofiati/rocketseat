import { useEffect, useState } from "react";
import { Image, View, FlatList } from "react-native";

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";

import LogoImg from "../../assets/logo-nlw-esports.png";
import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch("http://192.168.15.16:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

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

      <FlatList
        keyExtractor={(item) => item.id}
        data={games}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
