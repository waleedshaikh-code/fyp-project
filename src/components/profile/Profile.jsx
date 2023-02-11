import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ROOT_STYLE } from '../../utils/cssConstants';

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
    card: {
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        backgroundColor: 'rgb(229, 222, 222)',
        borderRadius: '4px',
        width: '100%',
        maxHeight: 'calc(100vh - 165px)',
        padding: '20px 30px',
    },
    fieldContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        width: 150,
        fontSize: 15,
    },
    input: {
        fontSize: 15,
        width: 210,
    },
});


const Profile = (props) => {
    const { user, classes } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [nic, setNic] = useState('');

    const data = [
        { label: 'First Name', value: 'Umer' },
        { label: 'Last Name', value: 'Shaikh' },
        { label: 'Email', value: 'umershaikh305@gmail.com' },
        { label: 'Phone no.', value: '0348-9097792' },
        { label: 'CNIC', value: '42101-4225740-5' },
    ]

    useEffect(() => {
        if (user) {
            setFirstName(user.name.firstName);
            setLastName(user.name.lastName);
            setEmail(user.details.email);
            setPhone(user.details.phoneNumber);
            setNic(user.details.cnicId);
        }
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography variant="h3" inherit className={classes.Heading}>Profile</Typography>

                <div className={classes.card}>
                    <div>
                        <div className={classes.fieldContainer}>
                            <Typography variant="subtitle2" className={classes.label}>
                                First Name
                            </Typography>
                            <input
                                type={"text"}
                                value={firstName}
                                onChange={(value) => { setFirstName(value) }}
                                className={classes.input}
                                disabled
                            />
                        </div>

                        <div className={classes.fieldContainer}>
                            <Typography variant="subtitle2" className={classes.label}>
                                Last Name
                            </Typography>
                            <input
                                type={"text"}
                                value={lastName}
                                onChange={(value) => { setLastName(value) }}
                                className={classes.input}
                                disabled
                            />
                        </div>

                        <div className={classes.fieldContainer}>
                            <Typography variant="subtitle2" className={classes.label}>
                                Email
                            </Typography>
                            <input
                                type={"text"}
                                value={email}
                                onChange={(value) => { setEmail(value) }}
                                className={classes.input}
                                disabled
                            />
                        </div>

                        <div className={classes.fieldContainer}>
                            <Typography variant="subtitle2" className={classes.label}>
                                Phone no.
                            </Typography>
                            <input
                                type={"text"}
                                value={phone}
                                onChange={(value) => { setPhone(value) }}
                                className={classes.input}
                                disabled
                            />
                        </div>

                        <div className={classes.fieldContainer}>
                            <Typography variant="subtitle2" className={classes.label}>
                                NIC
                            </Typography>
                            <input
                                type={"text"}
                                value={nic}
                                onChange={(value) => { setNic(value) }}
                                className={classes.input}
                                disabled
                            />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
        //data: state.adminReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // login: (...args) => dispatch(login(...args)),
        // logout: (...args) => dispatch(logout(...args)),
        // clearAuthReducer: (...args) => dispatch(clearAuthReducer(...args))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Profile));