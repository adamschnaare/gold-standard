import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '@models/user';
import { Item } from '@models/item';
import styled from 'styled-components';
import { loadingState } from '@components/ui/Loading/_state';
import thing from '../../..';

const Styled = {
  Container: styled.div``,
};

export default () => {
  const history = useHistory();
  const [user] = useRecoilState(userState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [item, setItem] = useState<Item>();
  let { thingId, itemId }: { thingId: string; itemId: string } = useParams();

  return (
    <Styled.Container>
      <h2>Thing - {thingId}</h2>
      <h3>Item - {itemId}</h3>
    </Styled.Container>
  );
};
