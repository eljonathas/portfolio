import { useRef, useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import Image from "next/image";
import Head from "next/head";

import ReactGA from "react-ga";

import { RiInstagramFill } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaArrowUp,
  FaGithub,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

import styles from "../styles/Home.module.css";
import StackBox from "../components/StackBox";
import stacks from "../utils/stacks";
import ProjectGrid from "../components/ProjectGrid";
import CertsGrid from "../components/CertsGrid";
import HistoricGrid from "../components/HistoricGrid";
import SubMenu from "../components/SubMenu";

import useOutsideClick from "../utils/useOutsideClick";

export default function Home({ titleName }) {
  const ref = useRef(null);
  const subMenu = useRef(null);
  const toUpButton = useRef(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  useEffect(() => {
    const target = ref.current;

    target.classList.add(styles.containerActive);

    window.addEventListener("scroll", activeTopButton);

    ReactGA.initialize("UA-107769128-2");
    ReactGA.pageview(window.location.pathname + window.location.search);

    return () => {
      window.removeEventListener("scroll", activeTopButton);
    };
  }, []);

  useOutsideClick(subMenu, () => {
    if (showSubMenu) {
      setShowSubMenu(false);
    }
  });

  function activeTopButton() {
    const target = toUpButton.current;

    if (window.scrollY > 100) {
      !target.classList.contains(styles.toUpButtonActive) &&
        target.classList.add(styles.toUpButtonActive);
    } else {
      target.classList.contains(styles.toUpButtonActive) &&
        target.classList.remove(styles.toUpButtonActive);
    }
  }

  function scrollToTop(e) {
    if (e.target.classList.contains(styles.toUpButtonActive)) {
      scroll.scrollToTop({
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
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
          <a
            className={styles.dOnly}
            href="https://drive.google.com/file/d/1hDUli4rFIuPNGIcW6rBmbQoJPK4JCCev/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Resumo</li>
          </a>
          <li className={styles.dOnly + " " + styles.blogSoon}>
            Blog <span>EM BREVE</span>
          </li>
        </ul>

        <div
          className={styles.mOnly}
          onClick={() => setShowSubMenu(!showSubMenu)}
        >
          <FaBars size={24} />
        </div>

        <div className={(styles.navbarSocial += " " + styles.dOnly)}>
          <a
            href="https://www.instagram.com/jonathassx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramFill size={24} />
          </a>
          <a
            href="https://www.facebook.com/thmrss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/eljonathas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="malito:jonathas.andrade5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            className={styles.navbarButton}
            href="https://github.com/eljonathas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={19} />
            Github
          </a>
        </div>
      </nav>

      <main>
        <div className={styles.flexRow}>
          <div className={styles.lateralMenu}>
            <ul>
              <li>
                <Link
                  activeClass={styles.itemActive}
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-20}
                >
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link
                  activeClass={styles.itemActive}
                  to="stacks"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-20}
                >
                  Stacks
                </Link>
              </li>
              <li>
                <Link
                  activeClass={styles.itemActive}
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-20}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  activeClass={styles.itemActive}
                  to="certificate"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-20}
                >
                  Certifica????es
                </Link>
              </li>
              <li>
                <Link
                  activeClass={styles.itemActive}
                  to="historic"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-20}
                >
                  Hist??rico
                </Link>
              </li>
            </ul>

            <p>
              Feito com ???? por{" "}
              <a
                href="https://github.com/eljonathas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jonathas Andrade
              </a>
            </p>

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
              <h1 className={styles.articleTitle}>
                Algumas informa????es sobre mim ?????????????
              </h1>
              <div className={styles.articleDesc}>
                <div className={styles.personImage}>
                  <Image
                    src="/images/jonathas.jpeg"
                    width={784}
                    height={1056}
                  />
                </div>
                Me chamo Jonathas dos Santos Andrade, sou desenvolvedor
                Front-End orientado pela experi??ncia do usu??rio e apaixonado por
                expressar a criatividade. Tamb??m sou graduando em Ci??ncia da
                Computa????o na Universidade Federal do Par??. Minha paix??o por
                programa????o come??ou durante meu primeiro contato com JavaScript
                em 2014 e desde ent??o tenho buscado a evolu????o nessa linguagem
                para estimular a cria????o de aplica????es eficazes e inspiradoras
                que envolvem o uso das tecnologias derivadas dela como React,
                Next.js, Vue, React Native, Node.js, Express, TypeScript entre
                outras. Mesmo assim, como sou fascinado pelo conhecimento e pela
                vontade de criar experi??ncias marcantes, busco tamb??m
                frequentemente desenvolver aplicativos que envolvem todo o
                ecossistema Web e Mobile, desde o Front-End at?? o Back-End, com
                foco nos m??todos ??geis de programa????o para, al??m de manter a
                legibilidade dos meus c??digos, assegurar uma velocidade de
                entrega para continuar pondo em pr??tica ainda mais ideias.
              </div>
            </article>
            <article className={styles.contentArticle} id="stacks">
              <h1 className={styles.articleTitle}>
                Ferramentas que utilizo ????
              </h1>
              <p className={styles.articleDesc}>
                Confira algumas das linguagens e ferramentas que utilizo e j??
                utilizei ao longo do tempo como programador e entusiasta em
                computa????o:
              </p>
              <div className={styles.stacksGrid}>
                {stacks.map((stack) => (
                  <StackBox key={stack.stack}>
                    <div>
                      <Image src={stack.icon} width={45} height={45} />
                    </div>
                    <h1>{stack.stack}</h1>
                    <p>{stack.info}</p>
                  </StackBox>
                ))}
              </div>
            </article>
            <article className={styles.contentArticle} id="projects">
              <h1 className={styles.articleTitle}>Projetos mais recentes ????</h1>
              <p className={styles.articleDesc}>
                Tecnologia sempre me fascinou bastante desde a inf??ncia. Ent??o,
                para solidificar meus conhecimentos em computa????o e como forma
                de melhorar meus estudos na ??rea, muitos projetos foram
                desenvolvidos por mim com as ferramentas j?? mencionadas, e aqui
                voc?? pode conferir alguns deles:
              </p>

              <ProjectGrid />
            </article>
            <article className={styles.contentArticle} id="certificate">
              <h1 className={styles.articleTitle}>Certifica????es ????</h1>
              <p className={styles.articleDesc}>
                Uma boa base de estudos te??ricos tamb??m foi essencial durante a
                minha evolu????o como desenvolvedor. Por isso, abaixo ?? poss??vel
                conferir algumas das minhas certifica????es obtidas ao longo do
                tempo nas ??rea da tecnologia, ci??ncia e inova????o.
              </p>
              <CertsGrid />
            </article>
            <article className={styles.contentArticle} id="historic">
              <h1 className={styles.articleTitle}>Hist??rico profissional ????</h1>
              <p className={styles.articleDesc}>
                Abaixo voc?? pode conferir meu hist??rico profissional e os cargos
                que j?? desempenhei durante a minha carreira profissional e
                acad??mico.
              </p>
              <HistoricGrid />
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export function getStaticProps() {
  const titleName = "Jonathas Andrade - Portf??lio";

  return {
    props: {
      titleName,
    },
  };
}
