import styled from 'styled-components'

import { ExternalArrow } from 'components/Icons'

const Contact = () => {
  return (
    <StyledContact>
      <h2>Contact</h2>
      <div>
        <p>Email</p>
        <a href='mailto:ezoller11@gmail.com' target='_blank'>
          ezoller11@gmail.com
          <ExternalArrow />
        </a>
      </div>
      <div>
        <p>GitHub</p>
        <a href='https://github.com/ezolla' target='_blank'>
          ezolla
          <ExternalArrow />
        </a>
      </div>
      <div>
        <p>LinkedIn</p>
        <a
          href='https://www.linkedin.com/in/ethan-zoller-43023b173/'
          target='_blank'
        >
          ethanzoller
          <ExternalArrow />
        </a>
      </div>
    </StyledContact>
  )
}

export default Contact

const StyledContact = styled.section`
  h2 {
    margin-bottom: 24px;
  }

  div {
    display: grid;
    grid-template-columns: 3fr 8fr;

    a {
      color: var(--color-white);
    }

    :not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media (max-width: 400px) {
    div {
      grid-template-columns: 1fr;
    }
  }
`
