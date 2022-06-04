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
    if (file.size > 1024)
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

export const FilesUploadComponent = () => {
  // console.log('selectedfile', selectedFile);
  const [selectedFile, setSelectedFile] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('2');
    const formData = new FormData();
    formData.append('profileImg', selectedFile);
    //formData.append('profileImg', e.target.value);
    console.log('3');
    axios.post('http://localhost:5000/api/upload', formData, {}).then((res) => {
      console.log('4');
      console.log(res);
    });
  };
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={onSubmit}>
          <h3>React File Upload</h3>
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
  auth: PropTypes.object.isRequired,
  profileImg: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(FilesUploadComponent);
