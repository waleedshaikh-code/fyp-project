import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

const ProtectedRoutes = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
    }
}

export default connect(mapStateToProps, null)(ProtectedRoutes);