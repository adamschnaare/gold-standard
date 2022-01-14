import { FC } from 'react'
import styled from 'styled-components'

type Config = {
  background?: string
  maxWidth?: string
  padding?: string
}

const defaultConfig = {
  background: 'transparent',
  maxWidth: '1020px',
  padding: '0 1rem',
}

const Styled = {
  Container: styled.div`
    background: ${(props: any) => props.background};
    padding: ${(props: any) => props.padding};
  `,
  Children: styled.div`
    margin: 0 auto;
    max-width: ${(props: any) => props.maxWidth};
  `,
}

type Props = {
  config?: Config
}

const CenteredPage: FC<Props> = ({ config = defaultConfig, children }) => {
  return (
    <Styled.Container {...config}>
      <Styled.Children {...config}>{children}</Styled.Children>
    </Styled.Container>
  )
}

export default CenteredPage
