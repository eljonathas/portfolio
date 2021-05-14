import { useRef, useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import Image from 'next/image'
import Head from 'next/head'

import ReactGA from 'react-ga'

import { RiInstagramFill } from 'react-icons/ri'
import { FaFacebookSquare, FaLinkedin, FaArrowUp, FaGithub, FaEnvelope, FaBars } from 'react-icons/fa'

import styles from '../styles/Home.module.css'
import StackBox from '../components/StackBox'
import stacks from '../utils/stacks'
import ProjectGrid from '../components/ProjectGrid'
import CertsGrid from '../components/CertsGrid'
import HistoricGrid from '../components/HistoricGrid'
import SubMenu from '../components/SubMenu'

import useOutsideClick from '../utils/useOutsideClick'

export default function Home({ titleName }) {
  const ref = useRef(null)
  const subMenu = useRef(null)
  const toUpButton = useRef(null)
  const [showSubMenu, setShowSubMenu] = useState(false)
  
  useEffect(() => {
    const target = ref.current;
    
    target.classList.add(styles.containerActive)
    
    window.addEventListener('scroll', activeTopButton)

    ReactGA.initialize('UA-107769128-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    return () => {
      window.removeEventListener('scroll', activeTopButton)
    }
  }, [])

  useOutsideClick(subMenu, () => {
    if(showSubMenu){
      setShowSubMenu(false)
    }
  })

  function activeTopButton () {
    const target = toUpButton.current;

    if(window.scrollY > 100){
      !target.classList.contains(styles.toUpButtonActive) && target.classList.add(styles.toUpButtonActive);
    }else{
      target.classList.contains(styles.toUpButtonActive) && target.classList.remove(styles.toUpButtonActive);
    }
  }

  function scrollToTop (e){
    if(e.target.classList.contains(styles.toUpButtonActive)){
      scroll.scrollToTop({
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
    }
  }
  
  return (
    <div className={styles.container} ref={ref}>
      <Head>
          <title>{titleName}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <SubMenu
        globalStyles={styles}
        showSubMenu={showSubMenu}
        subMenuRef={subMenu}
        setShowSubMenu={setShowSubMenu}
      />

      <nav className={styles.navbar}>
        <ul>
          <h1>Jonathas Andrade</h1>
          <a className={styles.dOnly} href="https://drive.google.com/file/d/1RA4S4adELbDcdOTHvuyrCXRewAjAbh0b/" target="_blank" rel="noopener noreferrer">
            <li>Resumo</li>
          </a>
          <li className={styles.dOnly+' '+styles.blogSoon}>Blog <span>EM BREVE</span></li>
        </ul>

        <div className={styles.mOnly} onClick={() => setShowSubMenu(!showSubMenu)}>
          <FaBars size={24}/>
        </div>

        <div className={styles.navbarSocial += ' '+styles.dOnly}>
          <a href="https://www.instagram.com/andrade.exe/" target="_blank" rel="noopener noreferrer"><RiInstagramFill size={24} /></a>
          <a href="https://www.facebook.com/thmrss/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={22} /></a>
          <a href="https://www.linkedin.com/in/eljonathas" target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} /></a>
          <a href="malito:jonathas.andrade5@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={22} /></a>
          <a className={styles.navbarButton} href="https://github.com/eljonathas" target="_blank" rel="noopener noreferrer">
            <FaGithub size={19} />
            Github
          </a>
        </div>
      </nav>

      <main>
        <div className={styles.flexRow}>
          <div className={styles.lateralMenu}>
            <ul>
              <li><Link activeClass={styles.itemActive} to="about" spy={true} smooth={true} duration={500} offset={-20} >Sobre mim</Link></li>
              <li><Link activeClass={styles.itemActive} to="stacks" spy={true} smooth={true} duration={500} offset={-20} >Stacks</Link></li>
              <li><Link activeClass={styles.itemActive} to="projects" spy={true} smooth={true} duration={500} offset={-20} >Projetos</Link></li>
              <li><Link activeClass={styles.itemActive} to="certificate" spy={true} smooth={true} duration={500} offset={-20} >Certificações</Link></li>
              <li><Link activeClass={styles.itemActive} to="historic" spy={true} smooth={true} duration={500} offset={-20} >Histórico</Link></li>
            </ul>

            <p>Feito com 💘 por <a href="https://github.com/eljonathas" target="_blank" rel="noopener noreferrer">Jonathas Andrade</a></p>

            <button 
              className={styles.toUpButton} 
              ref={toUpButton}
              onClick={scrollToTop}
            >
              <FaArrowUp />
            </button>
          </div>

          <section className={styles.rightContent}>
            <article className={styles.contentArticle} id="about">
              <h1 className={styles.articleTitle}>Algumas informações sobre mim 🏃‍♂️</h1>
              <div className={styles.articleDesc}>
                <div className={styles.personImage}>
                  <Image 
                    src="/images/jonathas.jpeg"
                    width={784}
                    height={1056}
                  />
                </div>
                Me chamo Jonathas dos Santos Andrade, sou estudante de Ciência da Computação na Universidade Federal do Estado do Pará desde o começo de 2020, porém sou programador desde 2015. Iniciei meus aprendizados na área com o desenvolvimento de
                aplicações web com as principais ferramentas daquele período (PHP, Javascript, Jquery, HTML e CSS), e desde então fui evoluindo meus conhecimentos
                com a criação de aplicações por meio do uso de tecnologias ainda mais recentes, principalmente em relação ao Javascript (React, React Native, Vue e Node).
                Atualmente utilizo mais as últimas para extrair o melhor desempenho possível para os meus apps, mas também iniciei os estudos com as linguagens Python e Ruby, com foco na primeira para a área
                de Ciência de Dados, mais especificamente para trabalhar com Inteligência Artificial nos meus projetos e pesquisas futuras.
              </div>
            </article>
            <article className={styles.contentArticle} id="stacks">
              <h1 className={styles.articleTitle}>Ferramentas que utilizo 🌠</h1>
              <p className={styles.articleDesc}>
                Confira algumas das linguagens e ferramentas que utilizo e já utilizei ao longo do tempo como programador e entusiasta em computação:
              </p>
              <div className={styles.stacksGrid}>
                {
                  stacks.map(stack => (
                    <StackBox key={stack.stack}>
                      <div>
                        <Image
                          src={stack.icon}
                          width={45}
                          height={45}
                        />
                      </div>
                      <h1>{ stack.stack }</h1>
                      <p>{ stack.info }</p>
                    </StackBox>
                  ))
                }
              </div>
            </article>
            <article className={styles.contentArticle} id="projects">
              <h1 className={styles.articleTitle}>Projetos mais recentes 🚀</h1>
              <p className={styles.articleDesc}>
                Tecnologia sempre me fascinou bastante desde a infância. Então, para solidificar meus conhecimentos em computação e como forma de
                melhorar meus estudos na área, muitos projetos foram desenvolvidos por mim com as ferramentas já mencionadas, e aqui você pode conferir alguns deles:
              </p>

              <ProjectGrid />
            </article>
            <article className={styles.contentArticle} id="certificate">
              <h1 className={styles.articleTitle}>Certificações 🎓</h1>
              <p className={styles.articleDesc}>
                Uma boa base de estudos teóricos também foi essencial durante a minha evolução como desenvolvedor. Por isso, abaixo é possível conferir algumas das minhas certificações obtidas ao longo do tempo nas área da tecnologia, ciência e inovação.
              </p>
              <CertsGrid />
            </article>
            <article className={styles.contentArticle} id="historic">
              <h1 className={styles.articleTitle}>Histórico profissional 👜</h1>
              <p className={styles.articleDesc}>
                Abaixo você pode conferir meu histórico profissional e os cargos que já desempenhei durante a minha carreira profissional e acadêmica.
              </p>
              <HistoricGrid />
            </article>
          </section>
        </div>
      </main>
    </div>
  )
}

export function getStaticProps(){
  const titleName = "Jonathas Andrade - Portfólio"

  return {
    props: {
      titleName
    }
  }
}
