// import libs
import React, { useState } from 'react';
// import material
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {FontAwesomeIcon} from 'react-icons'

//import icons
import Gauge from 'mdi-material-ui/Gauge';
import Message from 'mdi-material-ui/Message';
// import Face from 'mdi-material-ui/Face';
// import Settings from 'mdi-material-ui/Settings';
import HelpBox from 'mdi-material-ui/HelpBox';
import Settings from 'mdi-material-ui/light/Settings'
import { FaBeer } from "react-icons/fa";

import LogoutVariant from 'mdi-material-ui/LogoutVariant';


// import custom components
import './sideBarStyle.css';

import { withRouter } from 'react-router-dom';


const styles = ({ palette }) => ({
    listItem: {
        color: palette.primary.main,
        height: 50,
        minHeight: 50,
    },
    itemText: {
        marginLeft: 15,
        color: '#BAC4CE',
    },
    subSelected: {
        backgroundColor: 'rgba(0, 0, 0, 0.22)',
        borderLeft: '5px #F0B637 solid',
        paddingLeft: 11,
        '& > div p': {
            color: '#fff'
        },
    },
});




const SideBarContent = (props) => {
    const { classes, history } = props;
    const [selectedItem, setSelectedItem] = useState(history.location.pathname);
    return (
        <div className="container" style={{ maxHeight: `calc(100vh - 100px)` }}>
            <MenuItem
                button={true}
                onClick={() => { history.push('/dashboard'); setSelectedItem('dashboard') }}
                selected={selectedItem.includes('dashboard')}
                className={classes.listItem}
                classes={{ selected: classes.subSelected }}
            >
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Gauge />
                    <span className={classes.itemText}>Dashboard</span>
                </div>
            </MenuItem>
            <MenuItem
                button={true}
                onClick={() => { history.push('/messages'); setSelectedItem('messages') }}
                selected={selectedItem.includes('messages')}
                className={classes.listItem}
                classes={{ selected: classes.subSelected }}
            >
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Message />
                    <span className={classes.itemText}>Messages</span>
                </div>
            </MenuItem>
            <MenuItem
                button={true}
                onClick={() => { history.push('/profile'); setSelectedItem('profile') }}
                selected={selectedItem.includes('profile')}
                className={classes.listItem}
                classes={{ selected: classes.subSelected }}
            >
                     <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                     <FaBeer />
                    <span className={classes.itemText}>Profile</span>
                </div>

            </MenuItem>
            <MenuItem
                button={true}
                onClick={() => {
                    history.push('/settings'); setSelectedItem('settings')
                }}
                selected={selectedItem.includes('settings')}
                className={classes.listItem}
                classes={{ selected: classes.subSelected }}
            >
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Settings />
                    <span className={classes.itemText}>Settings</span>
                </div>
            </MenuItem >
            <MenuItem
                button={true}
                onClick={() => { history.push('/help'); setSelectedItem('help') }}
                selected={selectedItem.includes('help')}
                className={classes.listItem}
                classes={{ selected: classes.subSelected }}
            >
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <HelpBox />
                    <span className={classes.itemText}>Help</span>
                </div>
            </MenuItem >
            <MenuItem
                button={true}
                onClick={() => { history.push('/login'); setSelectedItem('login') }}
                selected={selectedItem.includes('login')}
                className={classes.listItem}
                classes={{ selected: classes.subSelected }}
            >
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <LogoutVariant />
                    <span className={classes.itemText}>Logout</span>
                </div>
            </MenuItem >
        </div >
    );
}

export default withRouter((withStyles(styles)(SideBarContent)));