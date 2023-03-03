import React from "react";
import serialize from "form-serialize";
import "./AddSong.css";
import { addSong } from "../../redux/Song/song.actions";
import { useDispatch } from "react-redux";

const AddSong = () => {
  const dispatch = useDispatch();

  function handleFormSubmit(event) {
    event.preventDefault();
    const newSong = serialize(event.target, { hash: true });
    dispatch(addSong(newSong));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h5>Add Song</h5>
      <div className="row">
        <div className="three columns">
          <label>Title</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="title" />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Artist</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="artist" />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Album</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="album" />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Genre</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="genre" />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>IMG URL</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="imageUrl" />
        </div>
      </div>

      <div className="row">
        <div className="three columns">
          <p></p>
        </div>
        <div className="nine columns">
          <button className="button-primary add-btn" type="submit">
            ADD SONG
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddSong;
