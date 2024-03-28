import PropTypes from "prop-types";

export default function List({ marca, anoLancamento }) {
  return (
    <div>
      <ul>
        <li>
          {marca} - {anoLancamento}
        </li>
      </ul>
    </div>
  );
}

List.propTypes = {
  marca: PropTypes.string,
  anoLancamento: PropTypes.number,
};

List.default = {
  marca: "Faltou a marca",
  anoLancamento: 0,
};
