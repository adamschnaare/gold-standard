import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

const GET_POSTS = gql`
  query GET_POSTS {
    posts {
      id
      content
      author {
        id
        name
      }
    }
  }
`;

const Styled = {
  Container: styled.div``,
};

export default () => {
  const { data, loading, error } = useQuery(GET_POSTS);

  if (loading) {
    return 'loading...'
  }

  if (error) {
    return `Error: ${error.message}`;
  }

  return (
    <Styled.Container>
      {data.posts.map((post: any) => (
        <div>id: {post.id} content: {post.content}</div>
      ))}
    </Styled.Container>
  );
};
