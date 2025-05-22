import { useState } from "react";
import Images from "./Images";
import FirstComponent from "./FirstComponent";

function Conditional() {
    const [showFirstComponent, setShowFirstComponent] = useState(true);

    return (
        <>
            {showFirstComponent ? <FirstComponent /> : <Images />}
            <button 
                onClick={() => setShowFirstComponent(prev => !prev)}
                aria-label="Alternar entre componentes"
            >
                Mudar Estado
            </button>
        </>
    );
}

export default Conditional;

// Opção 1
// function Conditional(){
//     let content;
//     let isLogged = true; 

//     if (isLogged){
//         content = <Images />
//     } else {
//         content = <FirstComponent /> 
//     }

//     return(
//         <> 
//             {content}
//             <button onClick={() => {isLogged = true}}>Mudar Estado</button>
//         </>
//     )
// }


// Opção 2 
// function Conditional(){
//     let isLogged = true; 

//     return(
//         <> 
        
//         {isLogged ? <FirstComponent /> : <Images/>}

//         </>
//     )
// }

