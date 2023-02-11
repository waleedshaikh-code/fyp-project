import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ROOT_STYLE } from '../../utils/cssConstants';
import { mainHeading, intro, mainHeading2, content } from './User Manual';

const styles = () => ({
    root: ROOT_STYLE,
    contentContainer: {
        flexGrow: 1,
        padding: '30px 30px',
    },
    heading: {
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
        height: 'calc(100vh - 165px)',
        maxHeight: 'calc(100vh - 165px)',
        padding: '20px 30px',
        overflowY: 'auto',
    },
    mainHeadingContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainHeading: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    mainHeading2: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    intro: {
        fontSize: 15,
    },
    innerHeading: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    ul: {
        marginLeft: 15,
        marginTop: 5,
    }
});


const Help = (props) => {
    const { classes, role } = props;
    let manualContent = [...content];
    if (role === 'vendor') {
        manualContent.splice(3, 2);  // Remove 'Manage Admins' and 'Manage Vendor' part from Help manual of Vendor
    }
    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography variant="h3" inherit className={classes.heading}>Help</Typography>

                <div className={classes.card}>
                    <div className={classes.mainHeadingContainer}>
                        <Typography variant="h4" inherit className={classes.mainHeading}>{mainHeading}</Typography>
                    </div>

                    <br />
                    <p className={classes.intro}>{intro}</p>

                    <br />

                    <Typography variant="h4" inherit className={classes.mainHeading2}>{mainHeading2}</Typography>

                    <br />

                    {
                        manualContent.map((con, index) => (
                            <>
                                <Typography variant="h4" key={index} inherit className={classes.innerHeading}>{con.heading}</Typography>
                                <ul className={classes.ul}>
                                    {
                                        con.internalContent.map((li, index) => (
                                            <li key={index}>{li}</li>
                                        ))
                                    }
                                </ul>
                                <br />
                            </>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        role: state.authReducer.role,
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Help));