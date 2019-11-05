import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
//URL part that always the same.
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

// HANDELING REQUEST GLOBALLY
axios.interceptors.request.use(request => {
  console.log(request)
  //You can work/edit the data before you return it, 
  // Need to return request, other wise we block the data
  return request;
}, error => {
  //catches errors if the request not was made, ex your internet connection is down. Does not catch general errors, like wrong url.
  console.log(error)
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  console.log(response)
  return response;
}, error => {
  //Does catch general errors
  console.log(error)
  return Promise.reject(error)
});
//Remove Interceptor
const myInterceptor = axios.interceptors.response.use(response => {
  console.log(response)
  return response;
}, error => {
  console.log(error)
  return Promise.reject(error)
});
// axios.interceptors.request.eject(myInterceptor);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
