import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./songs.css";
import {
  deleteSong,
  editingSong,
  selectSong,
} from "../../redux/Song/song.actions";

const SongsTable = () => {
  const songs = useSelector((state) => state.song.songList);
  const dispatch = useDispatch();

  const editSong = (song) => {
    dispatch(editingSong(true));
    dispatch(selectSong(song));
  };

  return (
    <div>
      <h5>Song List</h5>
      <table className="u-full-width song-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {songs.length > 0 ? (
            songs.map((song) => {
              const { id, title, artist, album, genre } = song;
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{artist}</td>
                  <td>{album}</td>
                  <td>{genre}</td>
                  <td>
                    <button
                      className="action-btn"
                      onClick={() => editSong(song)}
                    >
                      UPDATE
                    </button>
                    <button
                      className="action-btn"
                      onClick={() => dispatch(deleteSong(id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>No songs found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongsTable;
