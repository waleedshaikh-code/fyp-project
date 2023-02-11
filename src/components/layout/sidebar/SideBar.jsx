// import libs
import React from 'react';
// import material
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import custom components
import './sideBarStyle.css';
import SideBarContent from './SideBarContent';
import ListItemText from "@material-ui/core/ListItemText";


// Custom ExpansionPanel Starts
const ExpansionPanel = withStyles({
    root: {
        boxShadow: 'none',
        marginTop: '-2px !important',
        width: 250,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    },
    expanded: {
        margin: 'auto',
    },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: '#393939 !important',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        marginBottom: -1,
        minHeight: '53px !important',
        padding: '0 16px 0 16px !important',
        '& :last-child': {
            paddingRight: 0,
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        height: 'calc(100vh - 97px)',
        padding: 0,
        zIndex: 9999,
    },
}))(MuiExpansionPanelDetails);
// Custom ExpansionPanel Ends

const styles = ({ mixins, spacing, }) => ({
    drawer: {
        width: 250,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    titleText: {
        color: '#fff',
        fontSize: 14,
        paddingTop: spacing.unit / 2,
    },
    toolbarExtra: {
        ...mixins.toolbar,
        marginTop: spacing.unit * -2,
        backgroundColor: 'red',
    },
    sideBar: {
        position: 'fixed',
        zIndex: '2',
        '&>div>div': {
            overflow: 'hidden',
        }
    }
});

const SideBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideBar}>
            <div style={{ marginTop: 2 }}>
                <ExpansionPanel expanded={true} style={{ borderRadius: '0px' }} >
                    <ExpansionPanelSummary>
                        <div>
                            <div style={{ display: 'inline-flex', width: '80%' }}>
                                <ListItemText
                                    classes={{ secondary: classes.titleText }}
                                    secondary="MENU"
                                />
                            </div>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <SideBarContent swipable={false} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>
    );

}

export default (withStyles(styles)(SideBar));