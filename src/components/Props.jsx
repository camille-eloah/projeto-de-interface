export default function Props ({nome, newname}){

    return(
        <>
            <div>
                <h2>Teste props</h2>
                <p>O nome {nome} foi enviado via props</p>
                <p>E olha o {newname} aqui!</p>
            </div>
        </>
    )
}