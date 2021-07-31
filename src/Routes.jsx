import React from 'react';
// import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ChannelInfo from './components/ChannelInfo';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Welcome from './components/Welcome';

const Routes = () => {
  // const username = useSelector((state) => state.auth.user.preferred_username);

  return (
    <main className='flex-shrink-0 flex-grow-1'>
      <Switch>
        <Route path='/link' component={NotFound} />
        <Route exact path='/channel-info' component={ChannelInfo} />
        <Route exact path='/channels' render={(props) => <Home {...props} />} />
        <Route exact path='/' component={Welcome} />
      </Switch>
    </main>
  );
};

export default Routes;
