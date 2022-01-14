import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '@models/user';
import { Item } from '@models/item';
import styled from 'styled-components';
import { loadingState } from '@components/ui/Loading/_state';

const Styled = {
  Container: styled.div``,
  Link: styled.div`
    cursor: pointer;

    &:hover {
      color: red;
    }
  `,
};

export default () => {
  const history = useHistory();
  const [user] = useRecoilState(userState);
  const [, setLoadingState] = useRecoilState(loadingState);
  const [items, setItems] = useState<Item[]>([
    {
      thingId: '01',
      itemId: '01',
      title: 'An item of honor 👑',
    },
    {
      thingId: '01',
      itemId: '02',
      title: 'An item of valor 🗡',
    },
    {
      thingId: '01',
      itemId: '03',
      title: 'An item of respect 📕',
    },
  ]);
  const { thingId }: { thingId: string } = useParams();

  const handleItemClick = useCallback(
    (item: Item) => {
      if (history) {
        history.push(`/thing/${thingId}/item/${item.itemId}`);
      }
    },
    [history]
  );

  return (
    <Styled.Container>
      <h2>Thing - {thingId}</h2>
      {items.map((item) => (
        <Styled.Link onClick={() => handleItemClick(item)}>
          {item.title}
        </Styled.Link>
      ))}
    </Styled.Container>
  );
};
