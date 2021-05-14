import s from './CertsGrid.module.css'
import { FaPaperclip } from 'react-icons/fa'

export default function CertsGrid () {
    return (
        <div className={s.certsList}>
            <ul className={s.certsGrid}>
                <li>
                    <h1>Semana Omnistack 11</h1>
                    <p>Curso sobre desenvolvimento com React.JS, Node e React Native.</p>
                    <a href="https://drive.google.com/file/d/1k5eICxz2fJPIGPGYS8wzv7EGp8BhmAy_/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <button>
                            <FaPaperclip />
                            Visualizar
                        </button>
                    </a>
                </li>
                <li>
                    <h1>DoWhile2020</h1>
                    <p>Série de apresentações sobre o ecossistema de tecnologia</p>
                    <a href="https://drive.google.com/file/d/15MGnIsZOCHePXYsjX48HybMZ1V-5vSdL/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <button>
                            <FaPaperclip />
                            Visualizar
                        </button>
                    </a>
                </li>
                <li>
                    <h1>Machine Learning e Deep Learning com Python</h1>
                    <p>Curso sobre a aplicação de aprendizado de máquina utilizando a linguagem Python.</p>
                    <span>Em andamento</span>
                </li>
                <li>
                    <h1>Machine Learning e Deep Learning com Python para Ciência de Dados</h1>
                    <p>Curso sobre a aplicação de aprendizado de máquina utilizando a linguagem Python voltado ao ramo da Ciência de Dados.</p>
                    <span>Em andamento</span>
                </li>
            </ul>
        </div>
    )
}