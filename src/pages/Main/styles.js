import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 95vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  height: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Form = styled.div`
  width: 100%;
  max-width: 583px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.colors.black};
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  border: none;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize['2xl']};
  margin-right: 1.5rem;
  padding: 0 1.5rem;

  &:placeholder {
    color: ${(props) => props.theme.colors.gray500};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 5rem;
  height: 4rem;
  border: 3px solid ${(props) => props.theme.colors.white};
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.gray700};
    cursor: pointer;
  }
`;
