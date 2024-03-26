const Perfil3 = () => {
  return (
    <div className="container">
      <ul type="1">
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Perfil3;
