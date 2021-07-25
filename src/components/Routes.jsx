import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import CloudService from '../pages/CloudService';
import Billing from '../pages/Billing';
import Wallet from '../pages/Wallet';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';
const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/products' component={Products} />
      <Route path='/orders' component={Orders} />
      <Route path='/cloud-service' component={CloudService} />
      <Route path='/billing' component={Billing} />
      <Route path='/wallet' component={Wallet} />
      <Route path='/settings' component={Settings} />
      <Route path='/profile' component={Profile} />
    </Switch>
  );
};

export default Routes;
