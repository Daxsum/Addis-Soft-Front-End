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
import songData from "../../data/songData";
// const songData = apicall();

console.log(songData);
const INITIAL_STATE = {
  // songList: [],
  songList: songData,
  updating: false,
  selectedSong: {},
  searching: false,
  filteredSongList: songData,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SONG:
      return Object.assign({}, state, {
        songList: state.songList.concat(action.payload),
      });
    case ADD_SONG:
      return Object.assign({}, state, {
        songList: state.songList.concat(action.payload),
      });
    case DELETE_SONG:
      return Object.assign({}, state, {
        songList: state.songList.filter((song) => song.id !== action.payload),
      });
    case EDITING_SONG:
      return Object.assign({}, state, {
        editing: action.payload,
      });
    case SELECT_SONG:
      return Object.assign({}, state, {
        selectedSong: action.payload,
      });
    case UPDATE_SONG:
      return Object.assign({}, state, {
        songList: state.songList.map((song) =>
          song.id === action.payload.id ? action.payload : song
        ),
      });
    case SEARCH_SONG:
      return Object.assign({}, state, {
        filteredSongList: action.payload,
      });
    case SEARCHING_SONG:
      return Object.assign({}, state, {
        searching: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
