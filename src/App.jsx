import './App.css'
import Escopo from './components/Escopo'
import EscopoReduz from './components/EscopoReduz'
import Info1v from './components/Info1V'

import Props from './components/Props'
import Card from './components/Card'
import Children from './components/Children'

function App() {
  let aluno = "Cami"

  return (
    <>

    {/*       
      <Escopo/>
      <EscopoReduz/>
      */}

      <Props nome={"React PIU"} newname={aluno}/>
      <Card/> 
      <br/> 
      <Children> 
        <Card/> 
      </Children>

    </>
  )
}

export default App
