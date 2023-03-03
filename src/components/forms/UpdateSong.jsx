import React from "react";
import "./AddSong.css";
import { editingSong, updateSong } from "../../redux/Song/song.actions";
import { useDispatch, useSelector } from "react-redux";

let selectedSong;
const UpdateSong = () => {
  const dispatch = useDispatch();
  selectedSong = useSelector((state) => state.song.selectedSong);

  const handleChange = (e) => {
    const { name, value } = e.target;
    selectedSong = { ...selectedSong, [name]: value };
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const clickedBtnName = event.nativeEvent.submitter.name;
    if (clickedBtnName === "cancel") {
      dispatch(editingSong(false));
    } else {
      dispatch(updateSong(selectedSong));

      dispatch(editingSong(false));
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h5>Update Song</h5>
      <div className="row">
        <div className="three columns">
          <label>Title</label>
        </div>
        <div className="nine columns">
          <input
            className="u-full-width"
            type="text"
            name="title"
            defaultValue={selectedSong.title}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Artist</label>
        </div>
        <div className="nine columns">
          <input
            className="u-full-width"
            type="text"
            name="artist"
            defaultValue={selectedSong.artist}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Album</label>
        </div>
        <div className="nine columns">
          <input
            className="u-full-width"
            type="text"
            name="album"
            defaultValue={selectedSong.album}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Genre</label>
        </div>
        <div className="nine columns">
          <input
            className="u-full-width"
            type="text"
            name="genre"
            defaultValue={selectedSong.genre}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>IMG URL</label>
        </div>
        <div className="nine columns">
          <input
            className="u-full-width"
            type="text"
            name="imageUrl"
            defaultValue={selectedSong.imageUrl}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <p></p>
        </div>
        <div className="nine columns">
          <div className="row">
            <div className="six columns">
              <button className="button add-btn" name="cancel" type="submit">
                CANCEL
              </button>
            </div>
            <div className="six columns">
              <button className="button-primary add-btn" type="submit">
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateSong;
