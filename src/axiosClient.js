import axios from "axios";

const axiosCLient = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default axiosCLient;