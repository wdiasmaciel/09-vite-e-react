import { useState } from 'react';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';

export default function App() {
  const [telaAtual, setTelaAtual] = useState<'home' | 'sobre'>('home');

  return (
    <div className={styles.container}>
      <header className={styles.cabeçalho}>
        <div className={styles.conteudoCabecalho}>
          <div>
            <p className={styles.rotuloMarca}>Simular</p>
            <h1 className={styles.tituloMarca}>Navegação em React, usando o Hook useState</h1>
          </div>

          <nav className={styles.navegação}>
            <button
              onClick={() => setTelaAtual('home')}
              className={`${styles.botaoNavegacao} ${
                telaAtual === 'home' ? styles.botaoNavegacaoAtivo : styles.botaoNavegacaoInativo
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setTelaAtual('sobre')}
              className={`${styles.botaoNavegacao} ${
                telaAtual === 'sobre' ? styles.botaoNavegacaoAtivo : styles.botaoNavegacaoInativo
              }`}
            >
              Sobre
            </button>
          </nav>
        </div>
      </header>

      <main className={styles.principal}>
        <div className={styles.caixaConteudo}>
          {telaAtual === 'home' ? <Home /> : <Sobre />}
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: 'min-h-screen bg-slate-950 text-slate-100',
  cabeçalho: 'border-b border-slate-800 bg-slate-900/80 backdrop-blur',
  conteudoCabecalho: 'mx-auto flex max-w-5xl items-center justify-between px-6 py-6',
  rotuloMarca: 'text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400',
  tituloMarca: 'text-2xl font-semibold text-white',
  navegação: 'flex gap-3 rounded-full border border-slate-800 bg-slate-950/80 p-2',
  botaoNavegacao: 'rounded-full px-4 py-2 text-sm font-medium transition',
  botaoNavegacaoAtivo: 'bg-cyan-500 text-slate-950',
  botaoNavegacaoInativo: 'text-slate-300 hover:bg-slate-800 hover:text-white',
  principal: 'mx-auto max-w-5xl px-6 py-10',
  caixaConteudo: 'rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20',
};