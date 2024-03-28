export default function Pessoa({ nome, foto, profissao, idade }) {
  return (
    <div>
      <img src={foto} alt={`Nome da imagem: ${nome}`} />
      <h2>Nome: {nome}</h2>
      <h4>Idade: {idade}</h4>
      <h4>Profissão: {profissao}</h4>
    </div>
  );
}
