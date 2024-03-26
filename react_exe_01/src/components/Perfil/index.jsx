import styles from "./Perfil.module.css";

// eslint-disable-next-line react/prop-types
const Perfil = ({ nomeUsuario }) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.perfil_avatar}
        src={`https://github.com/${nomeUsuario}.png`}
        alt="Avatar"
      />
      <h1 className="perfil-title">{nomeUsuario}</h1>
    </header>
  );
};

export default Perfil;
