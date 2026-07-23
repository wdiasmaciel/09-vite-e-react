export default function Sobre() {
  return (
    <section className={styles.container}>
      <div className={styles.cartaoHero}>
        <p className={styles.legenda}>Sobre o projeto</p>
        <h2 className={styles.titulo}>Uma aplicação simples com Vite, React e Tailwind</h2>
        <p className={styles.descricao}>
          O objetivo do exemplo é simular uma navegação entre
          páginas (componentes reutilizáveis).
        </p>
      </div>

      <div className={styles.cartaoInformacao}>
        <h3 className={styles.tituloInformacao}>Tecnologias usadas</h3>
        <ul className={styles.lista}>
          <li className={styles.itemLista}>
            <span className={styles.ponto} /> Vite
          </li>
          <li className={styles.itemLista}>
            <span className={styles.ponto} /> React
          </li>
          <li className={styles.itemLista}>
            <span className={styles.ponto} /> Tailwind CSS
          </li>
        </ul>
      </div>
    </section>
  );
}

const styles = {
  container: 'space-y-6',
  cartaoHero: 'rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6',
  legenda: 'text-sm font-semibold uppercase tracking-[0.3em] text-violet-300',
  titulo: 'mt-2 text-3xl font-semibold text-white',
  descricao: 'mt-3 max-w-2xl text-base text-slate-300',
  cartaoInformacao: 'rounded-2xl border border-slate-800 bg-slate-950/80 p-6',
  tituloInformacao: 'text-xl font-semibold text-white',
  lista: 'mt-4 space-y-3 text-sm text-slate-400',
  itemLista: 'flex items-center gap-2',
  ponto: 'h-2.5 w-2.5 rounded-full bg-cyan-400',
};

/*
OBS:
.space-y-6: usada para aplicar um espaçamento vertical de 1.5rem (24px) 
            entre os elementos filhos de um contêiner, funcionando como 
            um atalho para a propriedade CSS margin-bottom.
.tracking-[0.3em]: usada para aplicar um espaçamento entre caracteres de 0.3em,
                   funcionando como um atalho para a propriedade CSS letter-spacing.
.text-base: usada para aplicar um tamanho de fonte de 1rem (16px), funcionando
            como um atalho para a propriedade CSS font-size.
*/