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
    AfterSchoolAdd,
    AccountManagement,
 } from '../components';

const MainRouter = () => {
  const location = useLocation();

  return (
    <>
        <div style={{display: "flex"}}>
            <SideBar />
            <div style={{flexDirection: "column", margin: "0 auto"}}>
              {
                location.pathname.split('/')[1] !== "as-info" && <Header />
              }
              <Switch>
                  <Route path='/' component={Home} exact/>
                  <Route path='/login' component={Login} exact/>
                  <Route path='/as-list/:type' component={AfterSchoolList} exact/>
                  <Route path='/file-upload' component={FileUpload} exact/>
                  <Route path='/as-info/:type/:id' component={AfterSchoolInfo} exact/>
                  <Route path='/add-after-school' component={AfterSchoolAdd} exact />
                  <Route path='/account' component={AccountManagement} exact />
              </Switch>
            </div>
        </div>
    </>
  );
}

export default MainRouter;