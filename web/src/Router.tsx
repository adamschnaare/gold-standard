import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomeView from '@views/home';
import ThingView from '@views/thing';
import Posts from '@views/posts'
import useScreenType from '@hooks/useScreenType';
import GraphiqlExplorer from './graphiql-explorer';

export default function BasicExample() {
  useScreenType();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/thing" component={ThingView} />
        <Route path="/posts" component={Posts} />
        <Route path="/graphiql-explorer" component={GraphiqlExplorer} />
      </Switch>
    </Router>
  );
}
