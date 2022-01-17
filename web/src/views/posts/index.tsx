import styled from 'styled-components';
import CenteredPage from '@components/layout/CenteredPage';
import ScreenTypeLayout from '@components/layout/ScreenTypeLayout';
import Mobile from './Mobile';
import Header from '@components/ui/Header';

const Styled = {
  Container: styled.div``,
};

// layout switching
export default () => {
  return (
    <Styled.Container>
      <Header />
      <CenteredPage>
        <ScreenTypeLayout
          mobile={<Mobile />} // default view
        />
      </CenteredPage>
    </Styled.Container>
  );
};
