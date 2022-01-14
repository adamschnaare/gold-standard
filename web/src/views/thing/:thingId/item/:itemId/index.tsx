import styled from 'styled-components';
import ScreenTypeLayout from '@components/layout/ScreenTypeLayout';
import Mobile from './Mobile';

const Styled = {
  Container: styled.div``,
};

// layout switching
export default () => {
  return (
    <Styled.Container>
      <ScreenTypeLayout
        mobile={<Mobile />} // default view
      />
    </Styled.Container>
  );
};
