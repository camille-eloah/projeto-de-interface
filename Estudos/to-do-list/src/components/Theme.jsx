/* Theme.jsx
Esse componente controla o tema da interface (claro ou escuro)
e aplica o tema ao seu conteúdo. 
Ele também exibe um botão para alternar o tema.
*/

import { useState } from "react" /* Importa o hook 'useState' do React.
O 'useState' serve para armazenar e alterar o estado (estado = memória temporária) de um componente.
Aqui, vai controlar se o tema atual é 'light' ou 'dark'.
*/

import "./Theme.css" /* Importa o arquivo de estilos CSS específico para esse componente. 
Isso permite que as classes CSS (.light, .dark, .themeButton, etc.) sejam aplicadas. */ 

export default function Theme({children}) /* Declara o componente 'Theme' como função. 
{children} é uma prop especial que representa outros componentes React que estão dentro de '<Theme>...</Theme>'.
    Exemplo:
    
    <Theme>
        <Dashboard />
    <Theme>

    O <Dashboard /> será o 'children'.
*/
{
    const [theme, setTheme] = useState('light'); /* Cria uma variável de estado chamada 'theme', que começa com o valor 'light' (tema claro). 
    'setTheme' é a função usada para mudar esse valor depois. */
    const toggleTheme = () => (
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    );
    return(
        <>
            <div className={theme}>
                <button className="themeButton" onClick={toggleTheme}>
                    Alternar Tema ({theme === 'light' ? 'Escuro' : 'Claro'})
                </button>
                {children}
            </div>
        </>
    )
}