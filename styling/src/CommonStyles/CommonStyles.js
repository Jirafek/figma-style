import styled from 'styled-components';

// создаем общий фон
export const Background = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6dfeb;
`;

// создаем общий контейнер для форм
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  background-color: #ffffff;
`;

// стили для заголовка
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #8b5c7e;
`;

// стили для инпутов
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

// стили для кнопки
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #a05c7b;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #8b5c7e;
  }
`;

// стили для текста "Don't have an account?"
export const Text = styled.p`
  margin-top: 20px;
  color: #8b5c7e;
`;

// стили для ссылки "SignUp"
export const Link = styled.a`
  margin-left: 5px;
  color: #a05c7b;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #8b5c7e;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  color: #a05c7b;
  font-size: 16px;
  font-weight: bold;
  appearance: none;

  option {
    background-color: #a6f4dc;
    color: #05668d;
    font-weight: bold;
  }
`;