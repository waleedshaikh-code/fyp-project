export const updateAdminData = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: 'UPDATE_ADMIN_DATA', payload: [...data] })
    };
};