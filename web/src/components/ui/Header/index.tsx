import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '@constants/colors';

const Styled = {
  Container: styled.div`
    border-bottom: 1px solid ${COLORS.black1};
    padding: 1rem;
    display: flex;
    gap: 1rem;
  `,
  Title: styled.div`
    font-weight: bold;
  `,
};

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Title>The Gold Standard</Styled.Title>
      <Link to="/">Home</Link>
    </Styled.Container>
  );
};

export default Header;
