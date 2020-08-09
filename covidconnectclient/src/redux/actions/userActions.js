import {
  SET_USER,
  SET_ERRORS,
  CLEAR_LOADING,
  LOADING_UI,
  CLEAR_ERRORS,
} from "../types";


import email from "../pages/login"; 
import password from "../pages/login"; 



import axios from "axios";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("http://localhost:5001/covidconnect-8067e/nam5(us-central)/api/login", userData)
    .then((res) => {
      //const FBIdToken = `Bearer ${res.data.token}`;
      //localStorage.setItem("FBIdToken", FBIdToken);
      //axios.defaults.headers.common["Authorization"] = FBIdToken;
      //setAuthorizationHeader(res.data.token);
      //dispatch(getUserData());
      //dispatch({ type: CLEAR_ERRORS });
      history.push('http://localhost:3000/');
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const getUserData = ( {
  "email": email,
  "password": password
  
});

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};