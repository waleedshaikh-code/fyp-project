import React from 'react';
import vanOnlogo from '../titlebar/VanOn_Logo.png';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Modal from '../../modals/Modal';
import { connect } from 'react-redux';

const styles = () => ({
    titleBarRoot: {
        height: 45,
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'space-between',
    },
    vanOnlogo: {
        width: '140px',
        height: '45px',
        padding: '5px 15px 5px 15px',
        cursor: 'pointer',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 5,
    },
    title: {
        flexGrow: 1,
    },
    profileIcon: {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        padding: 5,
        background: '#75727b',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        background: 'linear-gradient(to right, #616161, #9bc5c3)',
    }
});

const TitleBar = (props) => {
    const { classes, history } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [modalOpen, setModalOpen] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <span>
            <div className={classes.titleBarRoot}>
                <img src={vanOnlogo} className={classes.vanOnlogo} alt={'Van On logo'} onClick={() => { history.push('/dashboard') }} />
                {props.isAuthenticated && (
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            style={{ padding: '5px 20px 5px 5px' }}
                        >
                            <div className={classes.profileIcon}>{props.username.charAt(0).toUpperCase()}</div>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => { handleClose(); handleOpenModal() }}>Change Password</MenuItem>
                            <MenuItem onClick={() => { handleClose(); props.history.push('/login') }}>Log out</MenuItem>
                        </Menu>
                    </div>
                )}
            </div>
            <Modal
                handleClose={handleCloseModal}
                open={modalOpen}
                modalfor={"Project"}
                title={"Change Password"}
            />
        </span>
    );
}


const mapStateToProps = (state) => {
    return {
        username: state.authReducer.username,
        isAuthenticated: state.authReducer.isAuthenticated,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // login: (...args) => dispatch(login(...args)),
        // logout: (...args) => dispatch(logout(...args)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(TitleBar)));
