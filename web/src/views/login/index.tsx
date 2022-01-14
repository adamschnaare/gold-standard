import styled from 'styled-components'
import CenteredPage from '@components/layout/CenteredPage'
import ScreenTypeLayout from '@components/layout/ScreenTypeLayout'
import Mobile from './Mobile'

const Styled = {
  Container: styled.div``,
}

// layout switching
export default () => {
  return (
    <Styled.Container>
      <CenteredPage>
        <ScreenTypeLayout mobile={<Mobile />} />
      </CenteredPage>
    </Styled.Container>
  )
}
