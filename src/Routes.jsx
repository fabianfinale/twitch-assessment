import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import ChannelInfo from './components/ChannelInfo';
import ExploreChannels from './components/ExploreChannels';
import NotFound from './components/NotFound';
import RedirectFromTwitch from './components/RedirectFromTwitch';
import Welcome from './components/Welcome';

const Routes = () => {
  const username = useSelector((state) => state.auth.user.preferred_username);

  return (
    <main className='flex-shrink-0 flex-grow-1'>
      <Switch>
        <Route path='/link' component={NotFound} />
        <Route
          exact
          path='/channel-info'
          render={(props) =>
            username ? <ChannelInfo {...props} /> : <Redirect exact to='/' />
          }
        />
        <Route
          exact
          path='/channels'
          render={(props) =>
            username ? (
              <ExploreChannels {...props} />
            ) : (
              <Redirect exact to='/' />
            )
          }
        />
        <Route exact path='/redirect' component={RedirectFromTwitch} />
        <Route exact path='/' component={Welcome} />
      </Switch>
    </main>
  );
};

export default Routes;
