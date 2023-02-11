export const ROOT_STYLE = {
    minHeight: 'calc(100vh - 45px)',
    height: 'calc(100vh - 45px)',
    width: '100%',
    overflow: 'auto',
};
export const DIALOG_ROOT = {
    "&>:first-child": {
        backgroundColor: 'transparent !important',
    },
    "&>:nth-child(2)": {
        boxShadow: '0 0 45px 0 rgba(0,0,0,0.8)',
        borderRadius: '15px',
        overflow: 'hidden',
    }
};

export const MODAL_FOOTER = {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '0px',
    padding: '30px',
    paddingTop: '0px',
    marginTop: '30px',
};


export const MODAL_CANCEL_BUTTON = {
    padding: '7px 18px',
    minWidth: '75px',
    minHeight: 0,
    boxShadow: 'none',
    fontSize: '12px',
    color: '#4A4A4A',
    borderColor: '#C4C4C4',
    borderRadius: '6px',
    marginRight: '10px',
    marginLeft: '0',
    textTransform: 'capitalize',
    '&>:nthChild(1)': {
        minWidth: '50px',
        fontSize: '12px',
    }
};

export const MODAL_SUBMIT_BUTTON = {
    padding: '8px 18px',
    minWidth: '75px',
    minHeight: 0,
    borderColor: '#C4C4C4',
    borderRadius: '6px',
    fontSize: '12px',
    backgroundColor: '#B2B2B2',
    boxShadow: 'none',
    textTransform: 'capitalize',
    margin: '0px',
    marginRight: '10px',
    '&>:nthChild(1)': {
        minWidth: '50px',
        fontSize: '12px',
    }
};

export const MODAL_HEADER_TITLE = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '30px 45px 30px 30px',
    '& > h2': {
        fontSize: 18,
        color: '#4A4A4A',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
    }
};

export const MODAL_HEADER_CLOSE_ICON = {
    color: '#9B9A9A',
    fontSize: 20,
    cursor: 'pointer'
};

export const MODAL_HEADER_CLOSE_ICON_CONT = {
    position: 'absolute',
    right: '16px',
    top: '16px'
};
