import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cards from '../pages/Cards';
import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import Users from '../pages/Users';
// import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={SignIn} />
    <Route path="/" exact component={Main} />
    <Route path="/users" exact component={Users} />
    <Route path="/cards" exact component={Cards} />
    {/* <Route path="/" exact component={Main} isPrivate /> */}
  </Switch>
);

export default Routes;
