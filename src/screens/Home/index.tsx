import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

import happyEmoji from "@assets/happy.png";

import {
  Container,
  Greeting,
  GreetingEmoji,
  GreetingText,
  Header,
} from "./styles";

export function Home() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={happyEmoji} />
          <GreetingText>Olá, Admin</GreetingText>
        </Greeting>

        <TouchableOpacity>
          <MaterialIcons name="logout" size={24} color={COLORS.title} />
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
