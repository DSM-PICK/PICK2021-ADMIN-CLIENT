import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { 
    Login,
 } from '../components';

const MainRouter = () => {
  return (
    <>
        <Switch>
            <Route path='/login' component={Login} exact/>
        </Switch>
    </>
  );
}

export default MainRouter;