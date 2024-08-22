import React from 'react';
import styled from 'styled-components';
import Card from './componentes/Card';

const ProdutosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProdutosComponentes = ({ produtos }) => {
  return (
    <ProdutosContainer>
      {produtos.map((product) => (
        <Card
          key={produtos.id}
          imagem={produtos.imagem}
          titulo={produtos.titulo}
          descricao={product.descricao}
        />
      ))}
    </ProdutosContainer>
  );
};

export default ProdutosComponentes;