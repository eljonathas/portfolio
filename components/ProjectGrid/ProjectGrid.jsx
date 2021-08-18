import Image from "next/image";
import s from "./ProjectGrid.module.css";

export default function ProjectGrid({ children }) {
  return (
    <div className={s.gridtable}>
      <article className={s.projectbox}>
        <div className={s.projectinfo}>
          <h1>Marvel Catalog</h1>
          <p>
            Aplicação web desenvolvida durante um desafio de vaga para consumir
            a API de dados da Marvel e exibir informações em relação aos
            personagens, quadrinhos, eventos e séries da marca.
          </p>
          <div className={s.footerRow}>
            <div className={s.iconsRow}>
              <div className={s.icon}>
                <Image src="/images/react.png" width={30} height={30} />
              </div>
              <div className={s.icon}>
                <Image src="/images/ts.png" width={30} height={30} />
              </div>
              <div className={s.icon}>
                <Image src="/images/js.png" width={30} height={30} />
              </div>
            </div>

            <a
              href="https://marvel.jandrade.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={s.demoButton}
            >
              Ver demo
            </a>
          </div>
        </div>
      </article>

      <article className={s.projectbox}>
        <div className={s.projectinfo}>
          <h1>Cryptowl</h1>
          <p>
            Aplicação web desenvolvida durante um trabalho da faculdade para
            exibir dados sobre criptomoedas mais utilizadas no mercado.
          </p>
          <div className={s.footerRow}>
            <div className={s.iconsRow}>
              <div className={s.icon}>
                <Image src="/images/ruby.png" width={30} height={30} />
              </div>
              <div className={s.icon}>
                <Image src="/images/js.png" width={30} height={30} />
              </div>
              <div className={s.icon}>
                <Image src="/images/nodejs.png" width={30} height={30} />
              </div>
            </div>

            <a
              href="https://github.com/eljonathas/cryptowl"
              target="_blank"
              rel="noopener noreferrer"
              className={s.demoButton}
            >
              Ver repo
            </a>
          </div>
        </div>
      </article>

      <article className={s.projectbox}>
        <div className={s.projectinfo}>
          <h1>Radio Brasil Site</h1>
          <p>
            Aplicação inteiramente desenvolvida por mim utilizando Next.JS com
            React no front-end e Node com Express no back-end.
          </p>
          <div className={s.footerRow}>
            <div className={s.iconsRow}>
              <div className={s.icon}>
                <Image src="/images/react.png" width={30} height={30} />
              </div>
              <div className={s.icon}>
                <Image src="/images/js.png" width={30} height={30} />
              </div>
              <div className={s.icon}>
                <Image src="/images/nodejs.png" width={30} height={30} />
              </div>
            </div>

            <a
              href="https://radiobrasil.site"
              target="_blank"
              rel="noopener noreferrer"
              className={s.demoButton}
            >
              Ver demo
            </a>
          </div>
        </div>
      </article>

      <article className={s.projectbox}>
        <div className={s.projectinfo}>
          <h1>Portfy</h1>
          <p>
            Template de portfólio desenvolvido em React com Next.js no front-end
            com layout responsivo e reativo.
          </p>
          <div className={s.footerRow}>
            <div className={s.iconsRow}>
              <div className={s.icon}>
                <Image src="/images/react.png" width={30} height={30} />
              </div>
              <div className={s.icon}>
                <Image src="/images/ts.png" width={30} height={30} />
              </div>
            </div>
            <a
              href="https://portfy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={s.demoButton}
            >
              Ver demo
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
