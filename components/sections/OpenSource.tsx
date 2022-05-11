import styled from 'styled-components'

import { ExternalArrow } from 'components/Icons'

const OpenSource = () => {
  return (
    <StyledOpenSource>
      <h2>Open Source</h2>
      <Project>
        <p>2022</p>
        <div>
          <ProjectHeader>
            <h3>
              <a
                href='https://github.com/ezolla/twitch-chat-socket'
                target='_blank'
              >
                Twitch Chat Socket
                <ExternalArrow />
              </a>
            </h3>
            <div>
              <p>Typescript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <ProjectDescription>
            Mock Twitch chat server built with socket.io.
          </ProjectDescription>
        </div>
      </Project>
      <Project>
        <p>2020</p>
        <div>
          <ProjectHeader>
            <h3>
              <a
                href='https://github.com/ezolla/Twitter-Monitor'
                target='_blank'
              >
                Twitter Monitor
                <ExternalArrow />
              </a>
            </h3>
            <div>
              <p>Javascript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <ProjectDescription>
            Monitor Twitter accounts with Discord webhooks. Built with Node.js,
            Twit, and Requests.
          </ProjectDescription>
        </div>
      </Project>
      <Project>
        <p>2020</p>
        <div>
          <ProjectHeader>
            <h3>
              <a href='https://github.com/ezolla/SneakCord' target='_blank'>
                SneakCord
                <ExternalArrow />
              </a>
            </h3>
            <div>
              <p>Typescript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <ProjectDescription>
            Powerful Discord bot with 20 plus commands designed to help sneaker
            reselling communities. Built with Node.js and many npm packages.
          </ProjectDescription>
        </div>
      </Project>
      <Project>
        <p>2020</p>
        <div>
          <ProjectHeader>
            <h3>
              <a
                href='https://github.com/ezolla/linear-app-discord'
                target='_blank'
              >
                Linear App Discord
                <ExternalArrow />
              </a>
            </h3>
            <div>
              <p>Typescript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <ProjectDescription>
            Send webhooks alerts to Discord by listening to the new issue events
            on your Linear app workspace.
          </ProjectDescription>
        </div>
      </Project>
      <Project>
        <p>2020</p>
        <div>
          <ProjectHeader>
            <h3>
              <a
                href='https://github.com/ezolla/Adidas-Stock-Checker'
                target='_blank'
              >
                Adidas Stock Checker
                <ExternalArrow />
              </a>
            </h3>
            <div>
              <p>Javascript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <ProjectDescription>
            Check the stock levels for any Adidas products in realtime. Built
            with Node.js and requests.
          </ProjectDescription>
        </div>
      </Project>
      <Project>
        <p>2020</p>
        <div>
          <ProjectHeader>
            <h3>
              <a
                href='https://github.com/ezolla/Crypto-Price-Checker'
                target='_blank'
              >
                Crypto Price Checker
                <ExternalArrow />
              </a>
            </h3>
            <div>
              <p>Javascript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <ProjectDescription>
            Search up crypto prices through Discord. Built with Node.js and
            requests.
          </ProjectDescription>
        </div>
      </Project>
    </StyledOpenSource>
  )
}

export default OpenSource

const StyledOpenSource = styled.section`
  h2 {
    margin-bottom: 24px;
  }
`

const Project = styled.div`
  display: grid;
  grid-template-columns: 3fr 8fr;

  :not(:last-child) {
    margin-bottom: 36px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    a {
      color: var(--color-white);
    }
  }

  div {
    display: flex;

    p:not(:last-child) {
      margin-right: 16px;
    }
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`

const ProjectDescription = styled.p`
  margin-top: 4px;
`
