import styled from 'styled-components'

const Technologies = () => {
  return (
    <StyledTechnologies>
      <h2 style={{ marginBottom: '4px' }}>Technologies</h2>
      <p>
        <a href='https://www.javascript.com/' target='_blank'>
          Javascript
        </a>
        ,{' '}
        <a href='https://www.typescriptlang.org/' target='_blank'>
          Typescript
        </a>
        ,{' '}
        <a href='https://reactjs.org/' target='_blank'>
          React
        </a>
        ,{' '}
        <a href='https://nodejs.org/en/' target='_blank'>
          Node
        </a>
        ,{' '}
        <a href='https://nextjs.org/' target='_blank'>
          Next
        </a>
        ,{' '}
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/HTML'
          target='_blank'
        >
          HTML
        </a>
        ,{' '}
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/CSS'
          target='_blank'
        >
          CSS
        </a>
        ,{' '}
        <a href='https://www.postgresql.org/' target='_blank'>
          Postgres
        </a>
        ,{' '}
        <a href='https://styled-components.com/' target='_blank'>
          Styled Components
        </a>
        ,{' '}
        <a href='https://mui.com/' target='_blank'>
          Material UI
        </a>
        ,{' '}
        <a href='https://storybook.js.org/' target='_blank'>
          Storybook
        </a>
        ,{' '}
        <a href='https://redux.js.org/' target='_blank'>
          Redux
        </a>
        ,{' '}
        <a href='https://recoiljs.org/' target='_blank'>
          Recoil
        </a>
        ,{' '}
        <a href='https://mobx.js.org/README.html' target='_blank'>
          MobX
        </a>
        ,{' '}
        <a href='https://www.prisma.io/' target='_blank'>
          Prisma
        </a>
        ,{' '}
        <a href='https://expressjs.com/' target='_blank'>
          Express
        </a>
        ,{' '}
        <a href='https://git-scm.com/' target='_blank'>
          Git
        </a>
        ,{' '}
        <a href='https://github.com/' target='_blank'>
          GitHub
        </a>
        ,{' '}
        <a href='https://www.npmjs.com/' target='_blank'>
          Npm
        </a>
        ,{' '}
        <a href='https://www.electronjs.org/' target='_blank'>
          Electron
        </a>
        ,{' '}
        <a href='https://www.digitalocean.com/' target='_blank'>
          DigitalOcean
        </a>
        ,{' '}
        <a href='https://redis.io/' target='_blank'>
          Redis
        </a>
        ,{' '}
        <a href='https://www.mongodb.com/' target='_blank'>
          Mongo
        </a>
        ,{' '}
        <a href='https://vercel.com/' target='_blank'>
          Vercel
        </a>
        ,{' '}
        <a href='https://figma.com/' target='_blank'>
          Figma
        </a>
        , and{' '}
        <a href='https://stripe.com/' target='_blank'>
          Stripe
        </a>
        .
      </p>
    </StyledTechnologies>
  )
}

export default Technologies

const StyledTechnologies = styled.section`
  h2 {
    margin-bottom: 4px;
  }

  a {
    color: var(--color-grey);
  }
`
