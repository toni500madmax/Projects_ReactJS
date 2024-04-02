export type typeInput = {
  typeInput: "text" | "password";
  text: string;
};

export const Input = (props: typeInput) => {
  return (
    <div className="field">
      <div className="form__group">
        <input
          type={props.typeInput}
          className="form__field"
          placeholder={props.text}
          required
        />
        <label className="form__label">{props.text}</label>
      </div>
    </div>
  );
};
