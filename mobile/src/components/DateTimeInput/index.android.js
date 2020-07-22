import React, { useState, useMemo, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import {
  Container,
  DateButton,
  DateText,
  HourList,
  Hour,
  Title,
} from './styles';

export default function DateTimeInput({ provider, navigate }) {
  const [opened, setOpened] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [hours, setHours] = useState([]);

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: dateTime.getTime(),
        },
      });

      setHours(response.data);
    }

    loadAvailable();
  }, [dateTime, provider.id]);

  const dateFormatted = useMemo(
    () => format(dateTime, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [dateTime]
  );

  const setTime = (event, date) => {
    if (date !== undefined) {
      const selectedDate = date;

      setDateTime(selectedDate);
    }
  };

  function handleSelectHour(time) {
    navigate('Confirm', time);
  }

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <DateTimePicker
          mode="date"
          value={dateTime}
          display="default"
          onChange={setTime}
          minimumDate={new Date()}
          minuteInterval={60}
        />
      )}

      <HourList
        data={hours}
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => (
          <Hour
            enabled={item.available}
            onPress={() => handleSelectHour(item.value)}
          >
            <Title>{item.time}</Title>
          </Hour>
        )}
      />
    </Container>
  );
}
