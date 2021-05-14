import { FaBars, FaGithub } from 'react-icons/fa'

import styles from './SubMenu.module.css'

export default function SubMenu({ globalStyles, showSubMenu, subMenuRef, setShowSubMenu}){
    return (
        <div className={globalStyles.mOnly+' '+styles.subMenu+' '+(showSubMenu ? styles.subMenuActive : '')} ref={subMenuRef}>
            <div className={styles.subBars} onClick={() => setShowSubMenu(!showSubMenu)}>
                <FaBars size={24}/>
            </div>
            <div className={styles.subList}>
                <a>Resumo</a>
                <a>Contato</a>
                <a>Linkedin</a>
                <a>Facebook</a>
                <a>Instagram</a>
                <a href="https://github.com/eljonathas" target="_blank" rel="noopener noreferrer">
                    <button className={globalStyles.navbarButton}>
                        <FaGithub size={19} />
                        Acessar Github
                    </button>
                </a>
            </div>
            <p>
                Feito com 💘 por 
                <a href="https://github.com/eljonathas" target="_blank" rel="noopener noreferrer">Jonathas Andrade</a>
            </p>
         </div>
    )
}