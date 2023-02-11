import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ROOT_STYLE } from '../../utils/cssConstants';
import VanOnLogo from '../../assets/VanOn_LogoMark.png';
import VanOnTypo from '../../assets/VanOnTypo.png';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { login, clearAuthReducer, logout } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";

const styles = () => ({
    root: {
        ...ROOT_STYLE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteCard: {
        backgroundColor: 'white',
        boxShadow: '0px 2px 13px 0px',
        height: '500px',
        width: '65%',
        display: 'flex',
        borderRadius: 50,
    },
    whiteCardLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '500px',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    },
    whiteCardRight: {
        width: '50%',
        height: '500px',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vanOnLogo: {
        width: '20vw',
        height: '40vh',
    },
    vanOnTypo: {
        height: '10vh',
        width: '10vw',
    },
    formInput: {
        width: '370px',
        marginBottom: 10,
    },
    formContainer: {

    },
    formGroup: {
        display: 'flex',
        justifyContent: 'flex-start',
        //justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 8,
        width: 365,
    },
    loginDisabled: {
        color: '#fff !important',
        backgroundColor: '#999 !important',
        cursor: 'default !important',
    },
    raisedBtn: {
        width: '100%',
        height: 45,
        cursor: 'pointer',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: '#00A99D',
        marginTop: 10,
        color: '#fff',
        lineHeight: '22px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            color: '#222',
        },
    },
    forgotPasswordTxt: {
        cursor: 'pointer',
        fontSize: 15,
    },
    checkBoxRoot: {
        '&>span>svg': {
            fontSize: '22px',
            color: '#00A99D',
        }
    },
    rememberMeLabel: {
        fontSize: 15,
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
    }
});


const Login = (props) => {
    console.log(props)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRemember] = useState(false);
    const { classes, loginError, isLoading } = props;

    const handleSubmit = (e) => {
        try {
            props.login({ username, password })
        } catch(err) {
            console.log(err)
        }
        if (props.isAuthenticated) {
            if (rememberMe) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            }
            props.clearAuthReducer()
            props.history.push('/dashboard')
        }
        else {
            setTimeout(() => {
                props.clearAuthReducer()
            }, 3000)
        }
    }

    // Did Mount
    useEffect(() => {
        props.logout();
        localStorage.setItem('vanon:role', 'admin');
        localStorage.setItem('vanon:token', 'fff');
        // localStorage.setItem('vanon:user', JSON.stringify({username: 'waleed'})  );
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            setUsername(localStorage.getItem('username'));
            setPassword(localStorage.getItem('password'));
        }
    }, [])

    if (props.isAuthenticated) {
        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        }
        props.clearAuthReducer()
        props.history.push('/dashboard')
        return (<></>)
    }
    else {
        return (
            <div className={classes.root}>
                <div className={classes.whiteCard}>
                    <div className={classes.whiteCardLeft}>
                        <img src={VanOnLogo} alt={"VanOnLogo"} className={classes.vanOnLogo} />
                        <img src={VanOnTypo} alt={"VanOnTypo"} className={classes.vanOnTypo} />
                    </div>
                    <div className={classes.whiteCardRight}>
                        <div className={classes.formContainer} >
                            <div className={classes.textField} >
                                <TextField
                                    autoFocus name="username" id="username" placeholder='Username'
                                    onChange={(e) => { setUsername(e.target.value) }}
                                    className={classes.formInput} value={username}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start" style={{ marginLeft: '10px', marginRight: '11px', color: '#BAC4CE' }}>
                                                <FontAwesomeIcon icon={faUser} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>
                            <div className={classes.textField}>
                                <TextField
                                    id="pwd"
                                    name="password"
                                    placeholder='Password'
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    type="password"
                                    className={classes.formInput} value={password}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start" style={{ marginLeft: '10px', marginRight: '11px', color: '#BAC4CE' }} >
                                                <FontAwesomeIcon icon={faLock} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>

                            {loginError && <p className={classes.error}>{loginError}</p>}

                            <div className={classes.formGroup}>
                                <FormControlLabel
                                    control={<Checkbox value={rememberMe} onChange={() => { setRemember(!rememberMe) }} className={classes.checkBoxRoot} />}
                                    label="Remember Me" classes={{ label: classes.rememberMeLabel }}
                                />
                                {/* <Typography variant="body1" className={classes.forgotPasswordTxt} onClick={() => { console.log(rememberMe) }} >
                                    Forgot Password?
                            </Typography> */}
                            </div>
                            <Button className={classes.raisedBtn} color="primary" onClick={handleSubmit}
                                disabled={username.length < 1 || password.length < 5} classes={{ disabled: classes.loginDisabled }}>
                                {isLoading ?
                                    <PulseLoader
                                        size={7}
                                        color={'white'}
                                        loading={true}
                                    />
                                    :
                                    'Log in'
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginError: state.authReducer.loginError,
        isAuthenticated: state.authReducer.isAuthenticated,
        isLoading: state.authReducer.isLoading,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (...args) => dispatch(login(...args)),
        logout: (...args) => dispatch(logout(...args)),
        clearAuthReducer: (...args) => dispatch(clearAuthReducer(...args))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));