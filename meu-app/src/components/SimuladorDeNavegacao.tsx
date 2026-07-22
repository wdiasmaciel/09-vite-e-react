import { useState } from 'react';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';

export default function App() {
  const [telaAtual, setTelaAtual] = useState<'home' | 'sobre'>('home');

  return (
    <div>
      <nav>
        <button onClick={() => setTelaAtual('home')}>Home</button>
        <button onClick={() => setTelaAtual('sobre')}>Sobre</button>
      </nav>

      <main>
        {telaAtual === 'home' && <Home />}
        {telaAtual === 'sobre' && <Sobre />}
      </main>
    </div>
  );
}