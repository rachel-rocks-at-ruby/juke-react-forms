import React from 'react';

const NewPlaylist = function (props) {
  console.log(props);
  const displayAlert = {
    visibility: props.visibility
  }

  axios.post('/playlists/', { req.body })
  .then(res => res.data)
  .then(result => {
    console.log(result) // response json from the server!
  });

return (
  <div className="well">
    <form onSubmit={props.submitted} className="form-horizontal">
      <fieldset>
        <legend>New Playlist</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            <input required maxLength="16" className="form-control" value={props.inputValue} type="text" onChange={props.handleChange} />
            <div className="alert alert-warning" style={displayAlert}>Please enter a name</div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button type="submit" className="btn btn-success" disabled={props.disabled}>Create Playlist</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
)}

export default NewPlaylist;
