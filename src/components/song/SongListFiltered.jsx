import React from "react";
import "./Song.css";
import { SongCard } from "..";
import { useSelector } from "react-redux";

const SongListFiltered = () => {
  const songs = useSelector((state) => state.song.filteredSongList);

  return (
    <>
      {songs.length > 0 ? (
        songs.map((song) => {
          return <SongCard song={song} key={song.id} />;
        })
      ) : (
        <div className="row" key="0">
          <h5>Not found song.</h5>
        </div>
      )}
    </>
  );
};

export default SongListFiltered;
