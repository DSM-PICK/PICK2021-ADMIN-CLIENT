import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { 
    Header,
    Login,
    SideBar,
    Home,
    AfterSchoolList,
    FileUpload,
    AfterSchoolInfo,
 } from '../components';

const MainRouter = () => {
  const location = useLocation();

  return (
    <>
        <div style={{display: "flex"}}>
            <SideBar />
            <div style={{flexDirection: "column", margin: "0 auto"}}>
              {
                location.pathname.split('-')[1] !== 'info' ?
                <Header /> 
                : <div/>
              }
              <Switch>
                  <Route path='/' component={Home} exact/>
                  <Route path='/login' component={Login} exact/>
                  <Route path='/major-list' component={AfterSchoolList} exact/>
                  <Route path='/Activity-list' component={AfterSchoolList} exact/>
                  <Route path='/file-upload' component={FileUpload} exact/>
                  <Route path='/major-info' component={AfterSchoolInfo} exact/>
                  <Route path='/activity-info' component={AfterSchoolInfo} exact/>
              </Switch>
            </div>
        </div>
    </>
  );
}

export default MainRouter;