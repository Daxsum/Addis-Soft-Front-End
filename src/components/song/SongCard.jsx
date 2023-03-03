import React from "react";
import { Link } from "react-router-dom";

const SongCard = ({ song }) => {
  const { id, name, imageUrl } = song;
  const detailLink = "/detail/" + id;
  return (
    <div className="song-section">
      <Link to={detailLink} key={id}>
        <div className="song-card">
          <div className="image">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="song-title">
            <h5>{name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SongCard;
