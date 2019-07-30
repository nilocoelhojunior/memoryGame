import React from "react";
import { Container, Button, Text, H1 } from "native-base";

import { Content, Header, Separator } from "./style";
import { GAME, RANKING } from "../../router";

const Home = props => {
  const goToGame = () => {
    props.navigation.navigate(GAME);
  };

  const goToRanking = () => {
    props.navigation.navigate(RANKING);
  };

  return (
    <Container>
      <Content>
        <Header>
          <H1>Jogo da Memória</H1>
        </Header>
        <Button rounded success onPress={goToGame}>
          <Text>Jogar</Text>
        </Button>
        <Separator />
        <Button rounded onPress={goToRanking}>
          <Text>Ranking</Text>
        </Button>
        <Separator />
        <Button rounded warning>
          <Text>Sair</Text>
        </Button>
      </Content>
    </Container>
  );
};

Home.navigationOptions = {
  title: "Home",
  header: null
};

export default Home;
