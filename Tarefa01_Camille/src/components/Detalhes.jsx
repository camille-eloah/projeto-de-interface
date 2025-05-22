import "./Detalhes.css";

export default function Detalhes({ personagem, onClose }) {
  if (!personagem) return null;

  return (
    <div className="detalhes-overlay">
      <div className="detalhes-card">
        <button className="fechar" onClick={onClose}>✖</button>
        <img src={personagem.image} alt={personagem.caption} />
        <h2>{personagem.name}</h2>
        <p>{personagem.caption}</p>
      </div>
    </div>
  );
}
