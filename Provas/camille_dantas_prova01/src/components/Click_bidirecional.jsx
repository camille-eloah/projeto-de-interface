import { useState } from 'react'
import './Click.css'

export default function Click() {

    var estado_positivo = "normal"
    var estado_negativo = "normal"
    

    const [count, setCount] = useState(0)

    if (count > 10) {
        estado_positivo = "positivo"
    }
    if (count < 0) {
        estado_negativo = "negativo"
    }

    return ( 
    <> 
        <h2>Contador: {count}</h2>
        <div className={estado_positivo}>
            <button onClick={() => setCount((count) => count + 1)}>
            Incrementar
            </button>
        </div>

        <div className={estado_negativo}>
            <button onClick={() => setCount((count) => count - 1)}>
            Decrementar
            </button>
        </div>
    </>
    )
}