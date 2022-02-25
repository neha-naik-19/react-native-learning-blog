import axios from "axios";

// const iotData = async () => {
//   const configurationObject = {
//     method: "get",
//     url: "http://localhost:3000/blogposts",
//   };
//   const response = await axios(configurationObject);
//   console.log("Response : ", response.data);
// };

// export default iotData;

export default axios.create({
  baseURL: "http://localhost:4000",
});
