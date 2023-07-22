import axios from "axios";

const ip = "192.168.1.4";
const axiosBase = axios.create({
  baseURL: `https://node.animalspetinfo.com`,
});

export default axiosBase;
