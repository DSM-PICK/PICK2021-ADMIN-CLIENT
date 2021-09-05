import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { 
    Header,
    Login,
 } from '../components';

const MainRouter = () => {
  return (
    <>
        <Header />
        <Switch>
            <Route path='/login' component={Login} exact/>
        </Switch>
    </>
  );
}

export default MainRouter;