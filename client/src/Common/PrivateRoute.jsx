
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux'


const PrivateRoute = ({component: Component, ...rest}) => {
    //@ts-ignore
    const admin = useSelector((state) => state.admin)
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            // @ts-ignore
            admin?.admin?.isAdmin !== null && admin?.admin?.isAdmin ?
                <Component {...props} />
            : <Redirect to="/merchant" />
        )} />
    );
};

export default PrivateRoute;