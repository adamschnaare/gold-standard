import Router from './Router';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    background: #f7f8fb;
    min-height: 100vh;
    height: 100%;
  `,
};

function App() {
  return (
    <Styled.Container>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </Styled.Container>
  );
}

export default App;
