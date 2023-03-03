import React from "react";
import { useSelector } from "react-redux";
import "./SongDetail.css";

const SongDetail = (props) => {
  const songId = props.match.params.id;
  const songs = useSelector((state) => state.song.songList);
  const [song] = songs.filter((song) => song.id === songId);

  return (
    <>
      <div className="five columns image-side">
        <div className="detail-song-card">
          <div className="detail-image">
            <img src={song.imageUrl} alt={song.name} />
          </div>
          <div className="detail-song-rating">
            <p>{song.rating}</p>
          </div>
        </div>
      </div>
      <div className="seven columns content-side">
        <h5 className="detail-song-name">{song.name}</h5>
        <p className="detail-song-desc">{song.overview}</p>
      </div>
    </>
  );
};

export default SongDetail;
