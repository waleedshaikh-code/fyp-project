import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = (theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '100%',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)',
        borderRadius: '7px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #616161, #9bc5c3)',
    },
    icon: {
        fontSize: 40,
        color: 'black',
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginTop: '8px',
        marginLeft: '12px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
    },
});


const ManageCard = (props) => {
    const { classes, Icon, text, onClick } = props;
    return (
        <CardActionArea style={{ borderRadius: '7px' }} onClick={onClick} >
            <Paper className={classes.paper}> <Icon className={classes.icon} /> <span className={classes.text}>{text}</span></Paper>
        </CardActionArea>
    )
}

export default (withStyles(styles)(ManageCard));