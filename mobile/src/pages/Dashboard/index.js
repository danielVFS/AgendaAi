import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Background from '../../components/Background';
import { Container, Title, List } from './styles';
import Appointment from '../../components/Appointments';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments');

      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map((appoint) =>
        appoint.id === id
          ? {
              ...appoint,
              canceled_at: response.data.canceled_at,
            }
          : appoint
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}
