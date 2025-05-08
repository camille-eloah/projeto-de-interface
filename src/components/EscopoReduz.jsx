import './EscopoReduz.css'

const EscopoReduz = () => {
    function handleClick() {
        return (
            alert("handleClick")
        )
    }
    return(
        <>
            <button onClick={() => console.log("Você Clicou!")}>Clique</button>
            <div>
                <button onClick={() => alert("Tu Clicastes!")}>Novo Botão</button>
            </div>
            <div>
                <button onClick={handleClick}>handleClick</button>
            </div>
            <div className="container" onClick={() => alert("container")}>
                <p>Ablubleble</p>
            </div>
        </>
    )
}

export default EscopoReduz 