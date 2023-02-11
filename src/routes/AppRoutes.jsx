import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Help from '../components/help/Help';
import Login from '../components/login/Login';
import Settings from '../components/settings/Settings';
import Profile from '../components/profile/Profile';
import Messages from '../components/messages/Messages';
import ProtectedRoutes from './ProtectedRoutes';
import TitleBar from '../components/layout/titlebar/TitleBar';
import SideBar from '../components/layout/sidebar/SideBar';
import ManageDrivers from '../components/manage/ManageDrivers';
import ManageVendors from '../components/manage/ManageVendors';
import ManageAdmins from '../components/manage/ManageAdmins';
import ManagePassengers from '../components/manage/ManagePassengers';


const AppRoutes = () => {
    return (
        <>
            <TitleBar />
            <Switch>
                <Route path="/login" component={Login} />
                <>
                    <SideBar />
                    <div style={{ paddingLeft: '250px' }}>
                        <Switch>
                            <ProtectedRoutes exact path="/" component={Dashboard} />
                            <ProtectedRoutes exact path="/dashboard" component={Dashboard} />
                            <ProtectedRoutes exact path="/messages" component={Messages} />
                            <ProtectedRoutes exact path="/profile" component={Profile} />
                            <ProtectedRoutes exact path="/settings" component={Settings} />
                            <ProtectedRoutes exact path="/help" component={Help} />
                            <ProtectedRoutes exact path="/dashboard/drivers" component={ManageDrivers} />
                            <ProtectedRoutes exact path="/dashboard/vendors" component={ManageVendors} />
                            <ProtectedRoutes exact path="/dashboard/passengers" component={ManagePassengers} />
                            <ProtectedRoutes exact path="/dashboard/admins" component={ManageAdmins} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </>
                <Redirect to="/login" />
            </Switch>
        </>
    );
}

export default AppRoutes;