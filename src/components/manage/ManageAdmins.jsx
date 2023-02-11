import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ROOT_STYLE } from '../../utils/cssConstants';
import Table from '../table';
import { updateAdminData } from '../../store/actions/adminActions';

const styles = () => ({
    root: ROOT_STYLE,
    contentContainer: {
        flexGrow: 1,
        padding: '30px 30px',
    },
    Heading: {
        fontSize: 30,
        color: '#4A4A4A',
        marginBottom: 25,
        fontWeight: '500',
    },
});


const ManageAdmins = (props) => {
    const { classes, updateAdminData } = props;
    const [state, setState] = useState({
        headers: [
            { title: 'Email', field: 'email', type: 'string' },
            { title: 'First name', field: 'firstName' },
            { title: 'Last name', field: 'lastName' },
            { title: 'Password', field: 'password', type: 'string' },
            { title: 'Phone #', field: 'phoneNumber', type: 'number' },
            { title: 'CNIC', field: 'cnicId' },
        ],
        data: [],
    });

    //didMount
    useEffect(() => {
        const data = [...props.data];
        setState({ ...state, data })

    }, [])


    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography variant="h3" inherit className={classes.Heading}>Manage Admins</Typography>

                <Table
                    headers={state.headers}
                    data={state.data}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve();
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data.push(newData);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        setState(prevState => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            return { ...prevState, data };
                                        });
                                    }
                                }, 600);
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve();
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        //loginError: state.authReducer.loginError,
        data: state.adminReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateAdminData: (...args) => dispatch(updateAdminData(...args))
        // login: (...args) => dispatch(login(...args)),
        // logout: (...args) => dispatch(logout(...args)),
        // clearAuthReducer: (...args) => dispatch(clearAuthReducer(...args))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ManageAdmins));