import { useState } from 'react'

import './App.css';
import Condicional from './componentes/Condicional'
import OutraLista from './componentes/OutraLista'
import SeuNome from './componentes/SeuNome'
import Saudacao from './componentes/Saudacao'

function App() {
  const meusItens = ['React', 'Vue', 'Angular']
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional />
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

export default App;
