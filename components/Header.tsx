import Image from 'next/image'
import styled from 'styled-components'

import { ExternalArrow } from 'components/Icons'

const Header = () => {
  return (
    <StyledHeader>
      <Image
        src='https://i.imgur.com/JyQZfq6.png'
        alt='Ethan Zoller'
        width={92}
        height={92}
      />
      <div>
        <h1>Ethan Zoller</h1>
        <p>Frontend Software Engineer in Seattle, WA</p>
        <a href='mailto:ezoller11@gmail.com' target='_blank'>
          ezoller11@gmail.com
          <ExternalArrow />
        </a>
      </div>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 36px;

  div {
    margin-left: 16px;

    a {
      font-size: 14px;
      color: var(--color-silver);

      svg {
        path {
          fill: var(--color-silver);
        }
      }
    }
  }

  @media (max-width: 460px) {
    flex-direction: column;
    align-items: flex-start;

    div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`
