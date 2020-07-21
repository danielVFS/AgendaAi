import React from 'react';

import Background from '../../../components/Background';
import DateTimeInput from '../../../components/DateTimeInput';
import { Container } from './styles';

export default function SelectDateTime({ navigation, route }) {
  const { provider } = route.params;

  function navigationToConfirm(screen, provide, time) {
    navigation.navigate(`${screen}`, {
      provide,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateTimeInput provider={provider} navigate={navigationToConfirm} />
      </Container>
    </Background>
  );
}
