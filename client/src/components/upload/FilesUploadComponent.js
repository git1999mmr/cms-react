import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import { getUploads } from './uploadServices';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const axios = require('axios');
const MySwal = withReactContent(Swal);

const FileUploader = ({ onFileSelectError, onFileSelectSuccess }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    console.log('File log', file);
    if (file.size > 10485760)
      onFileSelectError({ error: 'File size cannot exceed more than 10MB' });
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
    axios
      .post('http://localhost:5000/api/upload', formData, {})
      .then((res) => {
        MySwal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Done',
          text: 'Task uploaded Success!',
          showConfirmButton: false,
          timer: 1500
        });
        console.log('Success');
      })
      .catch((err) => {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Task uploaded Failed!'
        });
        console.log('Failed');
      });
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

// Upload List
export const UploadList = () => {
  const [uploadlist, setUploadlist] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await getUploads();
      setUploadlist(data.data.upload);
    } catch (error) {
      console.log(error);
    }
  };

  const getFileName = (profImg) => {
    var linkFileName = profImg.slice(
      profImg.lastIndexOf('/') + 1,
      profImg.length
    );
    linkFileName = linkFileName.slice(
      linkFileName.lastIndexOf('~') + 1,
      linkFileName.length
    );
    console.log(linkFileName);
    return linkFileName;
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div
      className="todo_app todo_flex"
      style={{
        marginTop: '5%'
      }}
    >
      <Paper elevation={3} className="todo_container">
        <div className="todo_heading">Uploads List</div>

        <div style={{ fontWeight: 'light' }}>
          {uploadlist &&
            uploadlist.map((upload) => (
              <Paper key={upload._id} className="todo_flex task_container">
                <div>
                  <a href={upload.profileImg} target="_blank" rel="noreferrer">
                    {getFileName(upload.profileImg)}
                  </a>
                </div>
                <br />
              </Paper>
            ))}
        </div>
      </Paper>
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
