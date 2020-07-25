// PrivateRoute
//
// Wrapper Component for Route Component to only allow 
// authorised users to access a particular route
// 


import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types';

const PrivateRoute = ({component: Component, auth, ...rest}) => (
        <Route {...rest}
        render = {props =>
        auth.isAuthenticated === true ? (
            <Component {...props}/>
        ) :
        <Redirect to="/login"/>
        }/>
    )

PrivateRoute.propTypes = {
    auth: PropType.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps,null)(PrivateRoute);