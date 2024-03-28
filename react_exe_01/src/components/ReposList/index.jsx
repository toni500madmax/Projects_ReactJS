import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

export default function ReposList(nomeUsuario) {
  const [repos, setRepos] = useState([]);

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setCarregando(false);
          setRepos(resJson);
        }, 3000);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      <h2>Repositórios</h2>
      {carregando ? (
        <h3>carregando...</h3>
      ) : (
        <ul className={styles.list}>
          {repos.map(({ id, name, language, html_url }) => (
            <li key={id} className={styles.list__item}>
              <div className={styles.list__itemName}>
                <strong>Nome: </strong>
                {name}
              </div>
              <div className={styles.list__itemLanguage}>
                <strong>Linguagem: </strong>
                {language}
              </div>
              <div className={styles.list__itemLink}>
                <a target="_blank" href={html_url}>
                  Visitar {name} no github
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
