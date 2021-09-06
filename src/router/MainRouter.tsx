import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { 
    Header,
    Login,
    SideBar,
    Home,
 } from '../components';

const MainRouter = () => {
  return (
    <>
        <div style={{display: "flex"}}>
            <SideBar />
            <div style={{flexDirection: "column", margin: "0 auto"}}>
              <Header />
              <Switch>
                  <Route path='/login' component={Login} exact/>
                  <Route path='/' component={Home} exact/>
              </Switch>
            </div>
        </div>
    </>
  );
}

export default MainRouter;