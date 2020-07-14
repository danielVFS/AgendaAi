import React from 'react';
import { Text } from 'react-native';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function SignIn() {
  return (
    <Background>
      <Text>signin</Text>

      <Input
        style={{ marginTop: 5 }}
        icon="call"
        placeholder="Digite seu nome"
      />

      <Button>Entrar</Button>
    </Background>
  );
}
