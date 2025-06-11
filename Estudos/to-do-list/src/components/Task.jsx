import { useState } from "react"; /* É um hook do React que permite criar e controlar estado interno dentro do componente */
import "./Task.css" /* Importa o arquivo de estilos CSS ./Tasks.css */

export default function Task({name}) /* Exporta uma função componente chamada Task, que recebe uma prop (parâmetro) chamada name. Essa prop será usada para mostrar o título da tarefa. */
{
    const [status, setStatus] = useState('pendente') /* Cria uma variável de estado chamada status. 
    Inicialmente, status tem o valor padrão "pendente". A função setStatus é usada para mudar esse valor depois.
    
    É como fazer isso:

    const resultado = useState('pendente');
    // resultado[0] = status atual → 'pendente'
    // resultado[1] = função que muda o status

    const status = resultado[0];
    const setStatus = resultado[1];
    */
    const toggleTask = () => {
        setStatus((prev) => (prev === 'pendente' ? 'concluida' : 'pendente'))
    }; /* Cria uma função chamada toggleTask, que alternará o status da tarefa.
        Usa a versão de setStatus com uma função que recebe prev (valor anterior).
        Se o valor anterior for "pendente", muda para "concluida"; 
        se não, volta para "pendente".

        Aqui, também vemos uma estrutura condicional:
        condição ? valor_se_verdadeiro : valor_se_false

        Exemplo:
        idade >= 18 ? "Adulto" : "Menor de idade"

        A função acima, portanto, é como utilizar o if...else tradicional:
        
        const toggleTask = () => {
            setStatus((prev) => {
                if (prev === 'pendente') {
                return 'concluida';
                } else {
                return 'pendente';
                }
            });
            };
        */

    return (
        <div className={status}>
            <div className="task-line">
                <h2>{name}</h2>
                <button onClick={toggleTask}>
                {status === "concluida" ? "Desmarcar" : "Concluir"}
                </button>
            </div>
        </div>
    ); /* Por fim, o componente retorna um JSX que:
        - Cria uma <div> com a classe CSS igual ao status atual (pendente ou concluida). 
            -> Isso permite estilizar de maneira diferente dependendo do estado da tarefa.
        - Dentro da div, exibe:
            -> O nome da tarefa (<h2>{name}</h2>) 
            -> Um botão que chama toggleTask ao ser clicado
            -> O texto do botão muda conforme o status:
                -> Se estiver "concluida", aparece "Desmarcar". 
                -> Se estiver "pendente", aparece "Concluir".

    */
}