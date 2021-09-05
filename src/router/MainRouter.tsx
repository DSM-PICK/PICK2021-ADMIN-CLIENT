import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { 
    Header,
    Login,
    SideBar,
 } from '../components';

const MainRouter = () => {
  return (
    <>
        <div>
            <SideBar />
            <Header />
            <Switch>
                <Route path='/login' component={Login} exact/>
            </Switch>
        </div>
    </>
  );
}

export default MainRouter;