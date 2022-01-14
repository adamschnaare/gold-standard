import React from 'react';
import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    justify-items: center;
  `,
};

export default ({ itemWidth, children }) => {
  return <Styled.Container width={itemWidth}>{children}</Styled.Container>;
};
