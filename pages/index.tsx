import Head from 'next/head'
import styled from 'styled-components'
import type { NextPage } from 'next'

import Header from 'components/Header'
import WorkExperience from 'components/sections/WorkExperience'
import OpenSource from 'components/sections/OpenSource'
import Contact from 'components/sections/Contact'
import Technologies from 'components/sections/Technologies'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ethan Zoller</title>
        <meta
          name='description'
          content='Frontend Software Engineer in Seattle, WA'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        {/* Header */}
        <Header />

        {/* About */}
        <section>
          <h2 style={{ marginBottom: '4px' }}>About</h2>
          <p>
            I’m a software engineer with over two years of professional
            experience. I’m most interested in creating user-facing features on
            product frontends using React. I enjoy reading, outdoor activities,
            and video games.
          </p>
        </section>

        {/* Work Experience */}
        <WorkExperience />

        {/* Open Source */}
        <OpenSource />

        {/* Technologies */}
        <Technologies />

        {/* Contact */}
        <Contact />
      </Main>
    </>
  )
}

export default Home

const Main = styled.main`
  max-width: 600px;
  margin: 72px auto;

  section:not(:last-child) {
    margin-bottom: 64px;
  }
`
