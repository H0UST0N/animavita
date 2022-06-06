import React from 'react';
import { Content,Container } from './styles';

interface IProps {
  placeholder: string;
  nome: string;
  onChange?: (e: any) => void;
};

export default function Header({ placeholder, nome, onChange }: IProps) {
  return (
    <Content>
      AnimaVita&nbsp;&nbsp;&nbsp;&nbsp;
      <Container>
        <input name={nome} onChange={onChange} placeholder={placeholder} />
      </Container>
    </Content>
  );
}
