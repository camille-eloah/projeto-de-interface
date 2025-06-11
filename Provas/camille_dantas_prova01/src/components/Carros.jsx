import carros from './dados'


export default function Lista_Carros({carros}) { 

    return (
        <div>
        <h2>Lista de carros</h2>
            <ul style={{ listStyleType: 'none'}}>
            {carros.map(carro => (
            <li key={carro.id}>
                Modelo: {carro.modelo} <br />
                Ano: {carro.ano}
            </li>
            ))}
        </ul>
      </div>
    );
  }