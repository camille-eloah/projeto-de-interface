import carros from './dados'


export default function Lista_Carros(carros) { 

    return (
        <div>
        <h2>Lista de carros</h2>
            <ul>
            {carros.map(carro => (
            <li key={carro.id}>
                {carro.modelo}
            </li>
            ))}
        </ul>
      </div>
    );
  }