import {
  ADD_SONG,
  DELETE_SONG,
  EDITING_SONG,
  SELECT_SONG,
  UPDATE_SONG,
  SEARCH_SONG,
  SEARCHING_SONG,
  GET_SONG,
} from "./song.types";
export const getSongs = () => ({
  type: GET_SONG,
});
export const addSong = (payload) => {
  return {
    type: ADD_SONG,
    payload,
  };
};

export const deleteSong = (payload) => {
  return {
    type: DELETE_SONG,
    payload,
  };
};

export const editingSong = (payload) => {
  return {
    type: EDITING_SONG,
    payload,
  };
};

export const selectSong = (payload) => {
  return {
    type: SELECT_SONG,
    payload,
  };
};

export const updateSong = (payload) => {
  return {
    type: UPDATE_SONG,
    payload,
  };
};

export const searchSong = (payload) => {
  return {
    type: SEARCH_SONG,
    payload,
  };
};

export const searchingSong = (payload) => {
  return {
    type: SEARCHING_SONG,
    payload,
  };
};
