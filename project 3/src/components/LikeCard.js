import { useState } from "react";

function LikeCard() {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <div className="card">
      <h2>My React Card</h2>

      <p>This is my first Like Button project.</p>

      <button onClick={handleLike}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <p>Likes: {liked ? 1 : 0}</p>
    </div>
  );
}

export default LikeCard;