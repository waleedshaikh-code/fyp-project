const initialState = {
    isAuthenticated: true,
    token: localStorage.getItem('vanon:token') ? localStorage.getItem('vanon:token') : '',
    role: localStorage.getItem('vanon:role') ? localStorage.getItem('vanon:role') : '',
    username: '',
    password: '',
    loginError: '',
    isLoading: false,
    user:'',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return { ...state, isLoading: true }
        case 'SET_TOKEN':
            return { ...state, token: action.payload }
        case 'LOGIN_FAILED': {
            localStorage.removeItem('vanon:token');
            localStorage.removeItem('vanon:role');
            return { ...state, loginError: action.payload, isLoading: false }
        }
        case 'LOGIN_SUCCESS': {
            localStorage.setItem('vanon:role', action.payload.role);
            localStorage.setItem('vanon:user', JSON.stringify(action.payload.data));
            return { ...state, isLoading: false, isAuthenticated: true, role: action.payload.role, user: { ...action.payload.data } }
        }
        case 'SAVE_TOKEN': {
            localStorage.setItem('vanon:token', action.payload)
            return { ...state, token: action.payload }
        }
        case 'LOGOUT':
            localStorage.removeItem('vanon:token');
            localStorage.removeItem('vanon:role');
            localStorage.removeItem('vanon:user');
            return { ...state, isAuthenticated: false, token: '', role: '', user: '' }
        case 'CLEAR_AUTH_REDUCER':
            return { ...state, loginError: '' }
        default:
            return { ...state }
    }
}

export default authReducer;