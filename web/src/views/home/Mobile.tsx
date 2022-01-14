import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { loadingState } from '@components/ui/Loading/_state';
import { Link } from 'react-router-dom';

const Styled = {
  Container: styled.div``,
};

export default () => {
  const [loading, setLoading] = useRecoilState(loadingState);

  return (
    <Styled.Container>
      <h2>Home</h2>
      <Link to="/thing/01">Thing 01</Link>
    </Styled.Container>
  );
};
