import styled from "styled-components";

// Definir os typos de dados dos componentes de estilo.
type BtnProps = {
  principal: boolean;
  fontSize?: string;
};

// Declarando os estilos dos componentes de estilo
// Quando tiver atributos ou lógicas sendo passadas deve-se usar o tipo:
const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.principal ? "blue" : "red")};
  font-size: ${(props) => props.fontSize || "32px"};
`;

// Um componente de estilo pode ter filhos, e passar suas classes como herança:
const BtnSuccess = styled(Btn)`
  background-color: green;
  color: white;

  span {
    text-decoration: line-through;
  }
`;

export default function Teste() {
  return (
    <>
      <div>Olá</div>
      <Btn fontSize="20px" principal>
        Clique aqui
      </Btn>
      <Btn principal={false}>Clique aqui</Btn>
      <BtnSuccess principal>Sucesso</BtnSuccess>
      {/* Declarar o elemento como outro tipo de tag */}
      <BtnSuccess as="a" principal href="#">
        <span>clique no link</span>
      </BtnSuccess>
    </>
  );
}
