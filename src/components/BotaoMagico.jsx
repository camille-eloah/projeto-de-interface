var btnElement = document.querySelector('button.botao')
btnElement.addEventListener("click", criarQuadrado)

function criarQuadrado() {
    var newDiv = document.createElement('div')
    newDiv.style.backgroundColor = 'red'
    newDiv.style.width = '100px'
    newDiv.style.height = '100px'
    document.querySelector('#app').appendChild(newDiv)
}

function BotaoMagico () {
        return (
        <>
        <div id="app">
            <button class="botao" onClick={() => criarQuadrado()}>Adicionar</button>
        </div>
        </>
        )
}