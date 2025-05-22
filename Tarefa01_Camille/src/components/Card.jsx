import "./Card.css"

import akane from "../assets/character/akane.jfif"
import aoi from "../assets/character/aoi.jfif"
import hanako from "../assets/character/hanako.jfif"
import kou from "../assets/character/kou.jfif"
import mitsuba from "../assets/character/mitsuba.jfif"
import natsuhiko from "../assets/character/natsuhiko.jfif"
import sakura from "../assets/character/sakura.jfif"
import teru from "../assets/character/teru.jfif"
import tsukasa from "../assets/character/tsukasa.jfif" 

const characters = [
  { name: "Akane", image: akane, caption: "O Assistente do gerente" },
  { name: "Aoi", image: aoi, caption: "A Bailarina" },
  { name: "Hanako", image: hanako, caption: "Fantasma da Ópera" },
  { name: "Kou", image: kou, caption: "O Patrono" },
  { name: "Mitsuba", image: mitsuba, caption: "Cantor Popular" },
  { name: "Natsuhiko", image: natsuhiko, caption: "A Voz Tenor" },
  { name: "Sakura", image: sakura, caption: "Professora de Balé" },
  { name: "Teru", image: teru, caption: "Gerente" },
  { name: "Tsukasa", image: tsukasa, caption: "Fantasma da Ópera?" },
]

export default function Card() {
  return (
    <div className="card-container">
      {characters.map((char) => (
        <figure key={char.name}>
          <img src={char.image} alt={char.caption} />
          <figcaption>{char.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

