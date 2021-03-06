
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import InfoPage from './user/InfoPage';
import Landing from './components/Landing';
import ManagerRoute from './auth/ManagerRoute';
import PrivateRoute from './auth/PrivateRoute'

// manager route

import ManDashboard from './components/manager/ManDashboard';
import ManCharge from './components/manager/ManCharge';
import ManEmployee from './components/manager/ManEmployee';
import ManMeal from './components/manager/ManMeal';
import ManNotice from './components/manager/ManNotice';
import ManStuProfile from './components/manager/ManStuProfile';
import ManStudents from './components/manager/ManStudents';
import AboutHostel from './components/AboutHostel';

//student route
import StuHome from './components/student/StuHome';
import StuMyprofile from './components/student/StuMyprofile';
import StuBasicInfo from './components/student/StuBasicInfo';
import StuGuest from './components/student/StuGuest';
import StuMeal from './components/student/StuMeal';
import StuRecords from './components/student/StuRecords';



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/auth/signin" exact component={Signin} />
                <Route path="/auth/signup" exact component={Signup} />
                <Route path="/user/info" exact component={InfoPage} />

                {/*manager GetRoute */}
                <ManagerRoute path="/manager/dashboard" exact component={ManDashboard} />
                <ManagerRoute path="/manager/todaymealList" exact component={ManMeal} />
                <ManagerRoute path="/manager/allstudents" exact component={ManStudents} />
                <ManagerRoute path="/manager/allemployee" exact component={ManEmployee} />
                <ManagerRoute path="/manager/studpayRecord/:stuId/:userId" exact component={ManStuProfile} />
                <ManagerRoute path="/manager/notice" exact component={ManNotice} />
                <ManagerRoute path="/manager/abouthostel" exact component={AboutHostel} />
                <ManagerRoute path="/manager/getcost" exact component={ManCharge} />
                <ManagerRoute path="/manager/studentprofile/:stuId/:userId" exact component={ManStuProfile} />
                {/*student GetRoute */}
                <PrivateRoute path="/student/home" exact component={StuHome} />
                <PrivateRoute path="/student/basicInfo" exact component={StuBasicInfo} />
                <PrivateRoute path="/student/guest" exact component={StuGuest} />
                <PrivateRoute path="/student/meal" exact component={StuMeal} />
                <PrivateRoute path="/student/records" exact component={StuRecords} />
                     
               
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;
