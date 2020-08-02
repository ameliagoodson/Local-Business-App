import axios from "axios";

//change port
let serverUrl = "http://localhost:5001";
// (change serverUrl on heroku)
// if (process.env.NODE_ENV === "production") {
//     serverUrl = 'https://{heroku}.com/';
//
//FIX THIS
export const registerUser = userData => {
  console.log("testing whether register user works"); //doesn't work /show
  console.log(userData); //should be an object of the user
  return axios
    .post(serverUrl + "/api/register", {
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      password: userData.password,
    })
    .then(res => {
      console.log("Registered!"); //not working
    });
};

export const loginUser = userData => {
  // console.log(userData);
  return axios
    .post(serverUrl + "/api/login", {
      email: userData.email,
      password: userData.password,
    })
    .then(res => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getUsers = userData => {
  return axios
    .get(serverUrl + "/api/displayusers", {})
    .then(response => {
      console.log(response.data); // returns HTML index page?
      console.log(userData); //UNDEFINED
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};
