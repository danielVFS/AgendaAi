import React from 'react';

import Background from '../../../components/Background';
import DateTimeInput from '../../../components/DateTimeInput';
import { Container } from './styles';

export default function SelectDateTime({ route }) {
  const { provider } = route.params;

  return (
    <Background>
      <Container>
        <DateTimeInput provider={provider} />
      </Container>
    </Background>
  );
}
