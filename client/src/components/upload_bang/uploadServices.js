import axios from 'axios';
const apiUrl = 'http://localhost:5000/api/upload_bang';

export function getUploads() {
  return axios.get(apiUrl);
}
