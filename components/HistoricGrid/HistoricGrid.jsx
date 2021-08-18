import s from "./HistoricGrid.module.css";

export default function HistoricGrid() {
  return (
    <div className={s.grid}>
      <div className={s.gridItem}>
        <h1>2017 - 2019</h1>
        <div>
          <h1>Ministério Público do Estado do Pará</h1>
          <p>Estagiário Nível Médio</p>
        </div>
      </div>
      <div className={s.gridItem}>
        <h1>2021 - agora</h1>
        <div>
          <h1>FacompCast - Podcast da Faculdade de Computação da UFPA</h1>
          <p>Bolsista e Co-Anfitrião</p>
        </div>
      </div>
    </div>
  );
}
