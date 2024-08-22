import styled from 'styled-components';

const Descricao = styled.p`
  font-size: 16px;
  margin-bottom: 32px;
`;

const DescricaoComponente = () => {
  return (
    <Descricao>
      Esta é uma lista de produtos disponíveis em nossa loja.
    </Descricao>
  );
};

export default DescricaoComponente;