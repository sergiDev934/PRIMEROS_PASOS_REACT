import { useState } from "react";
import "./Card.css";

function App({
  title = "Título por defecto",
  desc = "Descripción por defecto",
  initialIsFollowing = false,
}) {
  const [isFollowing, setFollow] = useState(initialIsFollowing);
  const handleBtn = () => setFollow(!isFollowing);
  let btnClass = isFollowing ? "isFollowing" : "";
  let btnText = isFollowing ? "Siguiendo" : "Seguir";

  return (
    <div className="Card">
      <h1>{title}</h1>
      <p>{desc}</p>
      <button onClick={handleBtn} className={btnClass}>
        <span className="normalBtnText">{btnText}</span>
        <span className="isFollowing-hover">Dejar de Seguir</span>
      </button>
    </div>
  );
}

export default App;
