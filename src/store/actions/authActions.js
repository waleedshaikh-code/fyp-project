import Axios from "axios";
import { API } from "../../API";
import { checkArrayLength, checkKeyInObject } from "../../utils/utils";

// Without thunk we use it like this, but as we are using thunk middleware, we can return a function
// export const createProject = (project) => {
//     return { type: 'CREATE_PROJECT', payload: project };
// };


export const login = (loginDetails) => {
    return async (dispatch, getState) => {
        dispatch({ type: 'LOGIN_REQUEST' });
        let token = null;
        let error = '';
        try {
            let response = await Axios.post(API + '/login', {
                email: loginDetails.username,
                password: loginDetails.password,
            });
            if (response.status === 200) {
                let data = response.data;
                if (data.token) {
                    token = response.data.token;
                    dispatch({ type: 'SAVE_TOKEN', payload: token });
                    // try {
                    //     let loginResponse = await Axios.get(API + '/login', {
                    //         headers: {
                    //             'auth-token': token
                    //         }
                    //     });
                    //     if (loginResponse.status === 200) {
                            // let accountType = checkKeyInObject(checkKeyInObject(loginResponse, 'data'), 'accountType') ? loginResponse.data.accountType.toLowerCase() : 'none';
                            // if (accountType === 'vendor' || accountType === 'admin') {
                            //     let userDetails = checkKeyInObject(loginResponse, 'data') ? loginResponse.data.user : {};
                                dispatch({ type: 'LOGIN_SUCCESS', payload: { role: "admin", data: {
                                    ...data,
                                    name: {
                                        firstName: "abc",
                                        lastName: "def"
                                    },
                                    details: {
                                        email: "dsfsd",
                                        phoneNumber: "werwer",
                                        cnicId: "werwer",
                                    }
                                } } })
                            // }
                    //         else {
                    //             dispatch({ type: 'LOGIN_FAILED', payload: "This web portal is only available for admin and vendors" })
                    //         }

                    //     }
                    //     else {
                    //         dispatch({ type: 'LOGIN_FAILED', payload: "Network Error" })
                    //     }
                    // }
                    // catch (err) {
                    //     dispatch({ type: 'LOGIN_FAILED', payload: "Network Error" })
                    // }

                }
                else if (data.message) {
                    dispatch({ type: 'LOGIN_FAILED', payload: data.message })
                }
                else {
                    if (checkArrayLength(data.errors)) {
                        error = data.errors[0].msg;
                        dispatch({ type: 'LOGIN_FAILED', payload: error })
                    }
                    else {
                        dispatch({ type: 'LOGIN_FAILED', payload: "Some error occured while login" })
                    }
                }

            }
            else {
                // dispatch({ type: 'LOGIN_FAILED', payload: "Network Error" })
                dispatch({ type: 'LOGIN_SUCCESS', payload: { role: 'admin', data: {dd: 'd'} } })

            }
        }
        catch (err) {
            console.log(err)
            dispatch({ type: 'LOGIN_SUCCESS', payload: { role: 'admin', data: {dd: 'd'} } })
        }
    };
};

export const logout = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'LOGOUT' })
    };
};

export const clearAuthReducer = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'CLEAR_AUTH_REDUCER' })
    };
};