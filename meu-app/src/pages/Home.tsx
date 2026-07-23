export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.cartaoHero}>
        <p className={styles.legenda}>Página inicial</p>
        <h2 className={styles.titulo}>Bem-vindo ao simulador de navegação</h2>
        <p className={styles.descricao}>
          Este exemplo simula uma navegação entre páginas, 
          empregando o Hook useState.
        </p>
      </div>

      <div className={styles.grade}>
        <article className={styles.cartao}>
          <h3 className={styles.tituloCartao}>Navegação</h3>
          <p className={styles.textoCartao}>
            Os botões mudam o conteúdo sem recarregar a página.
          </p>
        </article>

        <article className={styles.cartao}>
          <h3 className={styles.tituloCartao}>Visual</h3>
          <p className={styles.textoCartao}>
            Os estilos foram definidos com Tailwind CSS.
          </p>
        </article>
      </div>
    </section>
  );
}

const styles = {
  container: 'space-y-6',
  cartaoHero: 'rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6',
  legenda: 'text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300',
  titulo: 'mt-2 text-3xl font-semibold text-white',
  descricao: 'mt-3 max-w-2xl text-base text-slate-300',
  grade: 'grid gap-4 md:grid-cols-2',
  cartao: 'rounded-2xl border border-slate-800 bg-slate-950/80 p-5',
  tituloCartao: 'text-lg font-semibold text-white',
  textoCartao: 'mt-2 text-sm text-slate-400',
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
.grid: usada para aplicar um layout de grade (grid) em um contêiner, funcionando
       como um atalho para a propriedade CSS display: grid.
.md:grid-cols-2: usada para definir o número de colunas em uma grade (grid) 
                como 2, mas apenas em telas médias (md) ou maiores, funcionando
                como um atalho para a propriedade CSS grid-template-columns.
*/