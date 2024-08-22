import styled from 'styled-components';
import Imagem from './componentes/imagem.jsx';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 16px;
`;

const CardTitulo = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardDescricao = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

const CardComponente = ({ image, title, description }) => {
  return (
    <CardContainer>
      <Imagem src={imagem} />
      <CardTitulo>{Titulo}</CardTitulo>
      <CardDescricao>{descricao}</CardDescricao>
    </CardContainer>
  );
};

export default CardComponente;