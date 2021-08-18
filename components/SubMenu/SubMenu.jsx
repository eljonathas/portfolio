import { FaBars, FaGithub } from "react-icons/fa";

import styles from "./SubMenu.module.css";

export default function SubMenu({
  globalStyles,
  showSubMenu,
  subMenuRef,
  setShowSubMenu,
}) {
  return (
    <div
      className={
        globalStyles.mOnly +
        " " +
        styles.subMenu +
        " " +
        (showSubMenu ? styles.subMenuActive : "")
      }
      ref={subMenuRef}
    >
      <div
        className={styles.subBars}
        onClick={() => setShowSubMenu(!showSubMenu)}
      >
        <FaBars size={24} />
      </div>
      <div className={styles.subList}>
        <a
          href="https://drive.google.com/file/d/1hDUli4rFIuPNGIcW6rBmbQoJPK4JCCev/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resumo
        </a>
        <a
          href="https://www.linkedin.com/in/eljonathas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://www.facebook.com/thmrss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/jonathassx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="malito:jonathas.andrade5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-mail
        </a>
        <a
          href="https://github.com/eljonathas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={globalStyles.navbarButton}>
            <FaGithub size={19} />
            Acessar Github
          </button>
        </a>
      </div>
      <p>
        Feito com 💘 por
        <a
          href="https://github.com/eljonathas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jonathas Andrade
        </a>
      </p>
    </div>
  );
}
