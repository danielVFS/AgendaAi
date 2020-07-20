import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Background from '../../components/Background';
import {
  Container,
  Title,
  Form,
  FormInput,
  Separator,
  SubmitButton,
  LogoutButton,
  LogoutText,
} from './styles';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();
  const oldPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCompleteType="off"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua nova senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>Cadastrar</SubmitButton>
          <LogoutButton onPress={handleLogout}>
            <LogoutText>Sair</LogoutText>
          </LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}
