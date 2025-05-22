import linkImg from "./assets/link.png"; 

function Images() {
    return (
        <figure>
            <img 
                src={linkImg} 
                alt="Link - The Legend of Zelda" 
            />
            <figcaption>Imagem</figcaption>
        </figure>
    );
}