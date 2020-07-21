import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 60px 0 30px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 15px;
  height: 45px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0 30px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 15px;
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const Hour = styled(RectButton)`
  flex: 1;
  align-items: center;
  background-color: #fff;
  opacity: ${(props) => (props.enabled ? 1 : 0.6)};

  padding: 20px;
  border-radius: 4px;
  margin: 0 10px 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;
