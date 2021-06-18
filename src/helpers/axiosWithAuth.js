import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token
const axiosWithAuth = () => axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    Authorization: window.localStorage.getItem('token')
  }
});

export default axiosWithAuth;
