import React from 'react';

import Background from '../../../components/Background';
import DateTimeInput from '../../../components/DateTimeInput';
import { Container } from './styles';

export default function SelectDateTime({ navigation, route }) {
  const { provider } = route.params;

  function navigationToConfirm(screen, time) {
    navigation.navigate(`${screen}`, {
      provider,
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
