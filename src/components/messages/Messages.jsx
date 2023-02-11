import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ROOT_STYLE } from '../../utils/cssConstants';

const styles = () => ({
    root: ROOT_STYLE,
});


const Messages = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h1>Messages</h1>
        </div>
    )
}

export default (withStyles(styles)(Messages));