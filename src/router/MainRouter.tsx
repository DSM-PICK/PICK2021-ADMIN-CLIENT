import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { 
    Header,
    Login,
    SideBar,
    Home,
    ClubList,
    FileUpload,
 } from '../components';

const MainRouter = () => {
  const location = useLocation();

  return (
    <>
        <div style={{display: "flex"}}>
            <SideBar />
            <div style={{flexDirection: "column", margin: "0 auto"}}>
              {
                location.pathname !== '/clubinfo' ?
                <Header />
                : <div/>
              }
              <Switch>
                  <Route path='/login' component={Login} exact/>
                  <Route path='/' component={Home} exact/>
                  <Route path='/clublist' component={ClubList} exact/>
                  <Route path='/file-upload' component={FileUpload} exact/>
              </Switch>
            </div>
        </div>
    </>
  );
}

export default MainRouter;