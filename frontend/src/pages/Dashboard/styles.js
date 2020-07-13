import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    align-self: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  opacity: ${(props) => (props.past ? 0.6 : 1)};

  padding: 20px;
  border-radius: 4px;
  background: #fff;

  strong {
    display: block;
    color: ${(props) => (props.available ? '#999' : '#240b36')};
    font-size: 20px;
    font-weight: bold;
  }

  span {
    display: block;
    color: ${(props) => (props.available ? '#999' : '#666')};

    margin-top: 3px;
    color: #656;
  }
`;
