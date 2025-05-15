import Images from "./Images";
import FirstComponent from "./FirstComponent";

// Opção 1
function Conditional(){
    let content;
    let isLogged = true; 

    if (isLogged){
        content = <Images />
    } else {
        content = <FirstComponent /> 
    }

    return(
        <> 
            {content}
            <button onClick={() => {isLogged = true}}>Mudar Estado</button>
        </>
    )
}

export default Conditional 

// Opção 2 
function Conditional(){
    let isLogged = true; 

    return(
        <> 
        
        {isLogged ? <FirstComponent /> : <Images/>}

        </>
    )
}