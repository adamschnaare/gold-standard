import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import CenteredPage from '@components/layout/CenteredPage';
import ItemIdView from './:itemId';

const Styled = {
  Container: styled.div``,
};

// subroute switching
export default () => {
  const { path } = useRouteMatch();

  return (
    <Styled.Container>
      <Switch>
        <Route exact path={`${path}/:itemId`} component={ItemIdView} />
      </Switch>
    </Styled.Container>
  );
};
