import { useState } from "react"

export default function Info1v() {
    // let valor = 0
    let [valor, setValor] = useState(0)
    
    function numeric() {
        let aux = valor*2 
        setValor(aux)
    }
    
    return (
        <>
            <div>
                <button onClick={() => setValor(valor+1)}>Cliques {valor}</button>
            </div>
        </>
    )
}