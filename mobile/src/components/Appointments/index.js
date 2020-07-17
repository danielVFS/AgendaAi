import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container,Left,Avatar,Info,Name,Time} from './styles';

export default function Appointments({data}) {
 return (
   <Container>
     <Left>
       <Avatar source={{uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'}}/>

      <Info>
        <Name>Daniel Vitor</Name>
        <Time>em 3 horas</Time>
      </Info>
     </Left>

     <TouchableOpacity onPress={() => {}}>
       <Icon name="event-busy" size={20} color="#FF0000"/>
     </TouchableOpacity>
   </Container>
  );
}
