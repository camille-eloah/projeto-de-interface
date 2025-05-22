import "./Card.css";

export default function Card({ characters, onSelect }) {
  return (
    <div className="card-container">
      {characters.map((char) => (
        <figure key={char.name} onClick={() => onSelect(char)}>
          <img src={char.image} alt={char.caption} />
          <figcaption>{char.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}