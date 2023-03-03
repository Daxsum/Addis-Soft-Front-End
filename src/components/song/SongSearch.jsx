import React from "react";
import { searchSong, searchingSong } from "../../redux/Song/song.actions";
import { useDispatch, useSelector } from "react-redux";

const SearchSong = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.song.songList);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value !== undefined) {
      const filteredSongs = songs.filter(
        (song) => song.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      dispatch(searchSong(filteredSongs));
      dispatch(searchingSong(true));
    } else {
      dispatch(searchSong(songs));
      dispatch(searchingSong(false));
    }
  };

  return (
    <input
      className="u-full-width search"
      type="text"
      name="search"
      placeholder="Search song"
      onChange={handleChange}
    />
  );
};

export default SearchSong;
