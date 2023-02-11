import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Close from '@material-ui/icons/Close';
import { MODAL_HEADER_TITLE, DIALOG_ROOT, MODAL_FOOTER, MODAL_HEADER_CLOSE_ICON_CONT, MODAL_HEADER_CLOSE_ICON, MODAL_SUBMIT_BUTTON, MODAL_CANCEL_BUTTON } from '../../utils/cssConstants';

const styles = (theme) => ({
    dialogTitleStyle: MODAL_HEADER_TITLE,
    dialog: {
        textAlign: 'center',
        backgroundColor: '#e9effd',
        borderBottom: '1px solid #dcdcdc',
    },
    TextField: {
        width: '140px',
    },
    actionBtn: {
        padding: '2px 8px',
        minHeight: 0,
        borderColor: '#1067ce',
        textTransform: 'capitalize',
        borderRadius: '6px',
        minWidth: '75px',
    },
    formControl: {
        width: '100%',
        flexDirection: 'row',
        padding: '0 40px',
        paddingBottom: '14px',
        paddingTop: '14px',
        borderBottom: '1px solid #dcdcdc',
    },
    dialogModal: {
        "&>div": {
            borderRadius: '0px',
        },
        ...DIALOG_ROOT,
    },
    dataName: {
        width: 'calc( 100% - 180px )',
        float: 'left',
        fontSize: 14,
        color: '#4A4A4A',
        marginTop: 'auto',
    },
    boldFont: {
        color: '#4A4A4A',
        fontWeight: 500,
        marginLeft: 3,
    },
    alertDetails: {
        float: 'left',
        fontSize: 14,
        fontWeight: 'bold',
        width: '70%',
        [theme.breakpoints.only('xs')]: {
            width: 'calc(100vw - 165px)',
            overflowWrap: 'break-word',
        }
    },
    dataValue: {
        float: 'left',
        fontSize: 14,
        fontWeight: 'bold',
    },
    dialogContent: {
        overflow: 'hidden',
        paddingTop: '0 !important',
        width: 370,
        padding: '0',
        maxHeight: 'calc(100vh - 475px)',
        overflowY: 'auto',
        minHeight: 20,
        marginLeft: '30px',
        [theme.breakpoints.only('xs')]: {
            width: `calc(100vw - 100px)`,
        },
    }
});

const Modal = ({
    classes,
    handleClose,
    open,
    name,
    title,
    modalfor,
    details,
    list,
    count = 1
}) => {

    const [current, setCurrent] = useState('');


    return (
        <div onClick={(e) => { e.stopPropagation(); }}>
            <Dialog
                disableRestoreFocus
                open={open}
                aria-labelledby="form-dialog-title"
                className={classes.dialogModal}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <DialogTitle id="form-dialog-title" classes={{ root: classes.dialogTitleStyle }}>
                        {title}
                    </DialogTitle>
                    <div style={MODAL_HEADER_CLOSE_ICON_CONT}>
                        <Close style={MODAL_HEADER_CLOSE_ICON} onClick={() => handleClose(false)} />
                    </div>
                </div>
                <form>

                    <DialogContent className={classes.dialogContent}>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Typography
                                className={classes.dataName}
                            >
                                Enter Current Password :
                                            </Typography>
                            <TextField id="standard-basic" label="Current Password" type="password" onChange={(e) => { setCurrent(e.target.value) }} error={current != "123456"} className={classes.TextField} />
                        </div>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Typography
                                className={classes.dataName}
                            >
                                Enter New Password :
                                            </Typography>
                            <TextField id="standard-basic" label="New Password" type="password" className={classes.TextField} />
                        </div>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Typography
                                className={classes.dataName}
                            >
                                Confirm New Password :
                            </Typography>
                            <TextField id="standard-basic" label="Confirm Password" type="password" className={classes.TextField} />
                        </div>
                    </DialogContent>
                    <DialogActions style={MODAL_FOOTER}>
                        <Button
                            variant="raised"
                            color="secondary"
                            onClick={() => handleClose(true)}
                            style={MODAL_SUBMIT_BUTTON}
                        >
                            Ok
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleClose(false)}
                            style={MODAL_CANCEL_BUTTON}
                        >
                            Cancel
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default withStyles(styles)(Modal);
