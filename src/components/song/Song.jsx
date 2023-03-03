import React from "react";
import { SongList, SongListFiltered } from "..";
import { useSelector } from "react-redux";

const Song = () => {
  const searching = useSelector((state) => state.song.searching);

  return searching ? <SongListFiltered /> : <SongList />;
};

export default Song;
