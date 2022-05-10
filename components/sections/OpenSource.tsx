import styled from 'styled-components'

const OpenSource = () => {
  return (
    <StyledOpenSource>
      <h2>Open Source</h2>
      <Project>
        <p>2022</p>
        <div>
          <ProjectHeader>
            <h3>Twitch Chat Socket</h3>
            <div>
              <p>Typescript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <p>Mock Twitch chat server built with socket.io.</p>
        </div>
      </Project>
      <Project>
        <p>2020</p>
        <div>
          <ProjectHeader>
            <h3>Twitter Monitor</h3>
            <div>
              <p>Javascript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <p>
            Monitor Twitter accounts with Discord webhooks. Built with Node.js,
            Twit, and Requests.
          </p>
        </div>
      </Project>
      <Project>
        <p>2020</p>
        <div>
          <ProjectHeader>
            <h3>SneakCord</h3>
            <div>
              <p>Typescript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <p>
            Powerful Discord bot with 20 plus commands designed to help sneaker
            reselling communities. Built with Node.js and many npm packages.
          </p>
        </div>
      </Project>
      <Project>
        <p>2020</p>
        <div>
          <ProjectHeader>
            <h3>Linear App Discord</h3>
            <div>
              <p>Typescript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <p>
            Send webhooks alerts to Discord by listening to the new issue events
            on your Linear app workspace.
          </p>
        </div>
      </Project>
      <Project>
        <p>2020</p>
        <div>
          <ProjectHeader>
            <h3>Adidas Stock Checker</h3>
            <div>
              <p>Javascript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <p>
            Check the stock levels for any Adidas products in realtime. Built
            with Node.js and requests.
          </p>
        </div>
      </Project>
      <Project>
        <p>2020</p>
        <div>
          <ProjectHeader>
            <h3>Crypto Price Checker</h3>
            <div>
              <p>Javascript</p>
              <p>0 Stars</p>
              <p>0 Forks</p>
            </div>
          </ProjectHeader>
          <p>
            Search up crypto prices through Discord. Built with Node.js and
            requests.
          </p>
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

  p {
    margin-top: 4px;
  }

  :not(:last-child) {
    margin-bottom: 36px;
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    p:not(:last-child) {
      margin-right: 16px;
    }
  }
`
