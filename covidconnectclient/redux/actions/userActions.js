import { SET_USER, SET_ERRORS, CLER_LOADING, LOADING_UI} from '../types';

export const loginUser = (userData,history) => (dispatch) => {
    //login code
    //TO DO
    dispatch({type: LOADING_UI});
    axios
      .post("/login", userData)
      .then((res) => {
        const FBIdToken = `Bearer ${res.data.token}`;
        localStorage.setItem('FBIdToken','Bearer ${res.data.token}')
        axios.defaults.headers.common['Authorization'] = 'Bearer'
        dispatch(getUserData())
        dispatch({type: CLEAR_ERRORS})
        this.props.history.push("/");
      })
      .catch((err) => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data

        })
      });
}
export const getUserData = () => (dispatch) => {
    axios.get('/user')
        .then(res =>{
            dispatch({
                type: SET_USER,
                payload: res.data
            })
          })  
          .catch(err => console.log(err));
}       