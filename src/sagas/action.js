// actions.js
import {
  ADD_SONG,
  DELETE_SONG,
  EDITING_SONG,
  SELECT_SONG,
  UPDATE_SONG,
  SEARCH_SONG,
  SEARCHING_SONG,
  GET_SONG,
} from "../redux/Song/song.types";
export const getSongs = () => ({
  type: GET_SONG,
});

export const addSong = (song) => ({
  type: ADD_SONG,
  payload: song,
});

export const deleteSong = (id) => ({
  type: DELETE_SONG,
  payload: id,
});

export const updateSong = (song) => ({
  type: UPDATE_SONG,
  payload: song,
});

export const setSongs = (songs) => ({
  type: "SET_SONGS",
  payload: songs,
});

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});
