import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const axios = require('axios');

const FileUploader = ({ onFileSelectError, onFileSelectSuccess }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    console.log('File log', file);
    if (file.size > 1000000)
      onFileSelectError({ error: 'File size cannot exceed more than 1MB' });
    else onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      />
    </div>
  );
};

export const FilesUploadComponent = (_profileImg, _auth) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('profileImg', selectedFile);
    //formData.append('profileImg', e.target.value);
    console.log('3');
    axios
      .post('http://localhost:5000/api/upload', formData, {})
      .then((res) => {});
  };
  return (
    <div className="container" style={{ marginTop: '1%', marginBottom: '1%' }}>
      <div className="row">
        <form
          onSubmit={onSubmit}
          encType="multipart/form-data"
          action="/upload"
          method="post"
        >
          <h3
            style={{
              fontSize: '2rem',
              color: 'darkblue',
              fontWeight: 'bold'
            }}
          >
            Task Upload
          </h3>
          <div className="form-group">
            <FileUploader
              onFileSelectSuccess={(file) => setSelectedFile(file)}
              onFileSelectError={({ error }) => alert(error)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

FilesUploadComponent.propTypes = {
  auth: PropTypes.object,
  profileImg: PropTypes.object
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(FilesUploadComponent);
