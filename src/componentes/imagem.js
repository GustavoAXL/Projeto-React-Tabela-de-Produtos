import styled from 'styled-components';

const Imagem = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 16px;
`;

const ImagemComponente = ({ src }) => {
  return <Imagem src={src} />;
};

export default ImagemComponente;