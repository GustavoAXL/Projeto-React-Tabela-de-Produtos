import React from 'react';
import Titulo from './componentes/titulo.js';
import Descricao from './componentes/descricao.js';
import Produtos from './componentes/produtos.js';

const produtos = [
  {
    id: 1,
    image: 'https://via.placeholder.com/100',
    title: 'Produto 1',
    description: 'Descrição do produto 1',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/100',
    title: 'Produto 2',
    description: 'Descrição do produto 2',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/100',
    title: 'Produto 3',
    description: 'Descrição do produto 3',
  },
  {
  id: 4,
    image: 'https://via.placeholder.com/100',
    title: 'Produto 4',
    description: 'Descrição do produto 4',
  },
  {
  id: 5,
    image: 'https://via.placeholder.com/100',
    title: 'Produto 5',
    description: 'Descrição do produto 5',
  },
];


const App = () => {
  return (
    <div>
      <Titulo />
      <Descricao />
      <Produtos produtos={produtos} />
    </div>
  );
};

export default App;