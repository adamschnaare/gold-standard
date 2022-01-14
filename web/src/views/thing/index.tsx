import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import CenteredPage from '@components/layout/CenteredPage';
import ThingIdView from './:thingId';
import ItemView from './:thingId/item';
import Header from '@components/ui/Header';

const Styled = {
  Container: styled.div``,
};

// subroute switching
export default () => {
  const { path } = useRouteMatch();

  return (
    <Styled.Container>
      <Header />
      <CenteredPage>
        <Switch>
          <Route exact path={`${path}/:thingId`} component={ThingIdView} />
          <Route path={`${path}/:thingId/item`} component={ItemView} />
        </Switch>
      </CenteredPage>
    </Styled.Container>
  );
};
