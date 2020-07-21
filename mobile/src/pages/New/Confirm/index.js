import React from 'react';
import { View, Text } from 'react-native';

export default function Confirm({ route }) {
  const { provider, time } = route.params;

  console.log(time);

  return (
    <View>
      <Text>Confirm</Text>
    </View>
  );
}
