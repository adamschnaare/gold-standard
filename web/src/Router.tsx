import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomeView from '@views/home';
import ThingView from '@views/thing';
import useScreenType from '@hooks/useScreenType';

export default function BasicExample() {
  useScreenType();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/thing" component={ThingView} />
      </Switch>
    </Router>
  );
}
