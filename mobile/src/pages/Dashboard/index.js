import React from 'react';
import { View, Text } from 'react-native';

import Background from '../../components/Background';
import {Container, Title, List} from './styles';
import Appointment from '../../components/Appointments';

const data = [1,2,3,4,5];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (<Appointment data={item}/>)}
        />
      </Container>
    </Background>
  );
}
