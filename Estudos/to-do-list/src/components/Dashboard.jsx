/* Dashboard.jsx
O componente 'Dashboard' tem como função exibir uma lista de tarefas (tasks).
Cada tarefa é mostrada usando o componente 'Task'.
*/

import Task from "./Task"; /* Importa o componente 'Task', que será usado para representar uma tarefa individual */ 
import "./Dashboard.css" /* Importa o arquivo de estilos CSS do dashboard. Esse arquivo deve conter classes como .dashboard, estilos do título, etc. */

export default function Dashboard ({tasks}) /* Cria e exporta o componente 'Dashboard'.
    Ele recebe uma 'props' chamada 'tasks', que deve ser um array de tarefas. 
    Exemplo de 'tasks' esperado: 
    
    [
        { id: 1, title: "Ver aula de Iuri Redes"},
        { id: 2, title: "Fazer To-Do-List com React"},
    ];
    */

{
    return (
        <>
        <div className="dashboard">
            <h1>Lista de tarefas</h1>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    name={task.title}
                />
            ))}
        </div>
        </>
    )

    /* 
    {task.map((task) => (...))} 
        - Faz um loop no array de tasks usando .map().
        - Para cada task, ele cria um novo componente <Task />.
    
    <Task key={task.id} name={task.title} />
        - key={task.id}: O ID é usado pelo React para identificar cada item da lista.
            Sempre use uma 'key' única em listas renderizadas.
        - name={task.title}: Passa o título da tarefa como prop 'name' para o componente 'Task', que vai exibir isso na tela.    
        
    Portanto, o componente Dashboard espera:
        - Que você passe uma lista de tarefas (tasks) como prop.
        - Que cada tarefa (task) tenha pelo menos 'id' e 'title'.
    */
}