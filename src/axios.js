import axios from 'axios';

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",

})
// Does not work :(
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


export default instance;