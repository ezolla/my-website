import styled from 'styled-components';

import { ExternalArrow } from 'components/Icons';

const WorkExperience = () => {
  return (
    <StyledWorkExperience>
      <h2>Work Experience</h2>
      <Experience>
        <p>2022 — Now</p>
        <div>
          <h3>
            <a href='https://branch.io/' target='_blank'>
              Software Engineer at Branch
              <ExternalArrow />
            </a>
          </h3>
          <p>Seattle, WA</p>
          <ul>
            <li>
              Lead multiple multi-sprint projects as the lead engineer handling
              tech specs, timeline estimations, team communications, and of
              course the implementation.
            </li>
            <li>
              Refactored and migrated features written in 5+ year old React code
              to modern coding practices with proper test coverage.
            </li>
            <li>
              Added many features, improvements, and fixed bugs while writing
              clean code with proper test coverage.
            </li>
            <li>
              Active participant in reviewing pull requests and doing coding
              challenge interviews with engineers of all levels.
            </li>
          </ul>
        </div>
      </Experience>
      <Experience>
        <p>2021 — 2022</p>
        <div>
          <h3>
            <a href='https://soleware.io/' target='_blank'>
              Full-Stack Engineer at Soleware
              <ExternalArrow />
            </a>
          </h3>
          <p>Remote</p>
          <ul>
            <li>
              Lead the implemented the entire web application with React and
              Next to create a delightful user experience.
            </li>
            <li>
              Created the entire component system from scratch in an expandable
              and reusable design.
            </li>
            <li>
              Designed and developed REST API to handle user authentication and
              actions that’s connected to a Postgres database.
            </li>
            <li>
              Communicated with users to consistently improve the web experience
              through planning many development cycles.
            </li>
          </ul>
        </div>
      </Experience>
      <Experience>
        <p>2020 — 2021</p>
        <div>
          <h3>
            <a href='https://nytesoftware.com/' target='_blank'>
              Frontend Engineer at Nyte Software
              <ExternalArrow />
            </a>
          </h3>
          <p>Remote</p>
          <ul>
            <li>
              Lead the implementation of new analytics and transaction history
              dashboard using React and connecting to the REST API.
            </li>
            <li>
              Connected Stripe subscriptions to allow users to manage and change
              their payment configurations.
            </li>
            <li>
              Worked closely with manager, designer, and customers to help
              envision product roadmap and development cycles.
            </li>
          </ul>
        </div>
      </Experience>
      <Experience>
        <p>2020 — 2020</p>
        <div>
          <h3>
            <a href='https://scoutapp.ai/' target='_blank'>
              Frontend Engineer at Scout App AI
              <ExternalArrow />
            </a>
          </h3>
          <p>Remote</p>
          <ul>
            <li>
              Developed multiple pages of the web dashboard utilizing the
              pre-existing component library and coding practices in React.
            </li>
            <li>
              Designed new components following the system's practices in being
              expandable and easy to understand while using Atlassian’s design
              system.
            </li>
            <li>
              Communicated timelines and status updates effectively with
              multiple frontend engineers and the project manager.
            </li>
            <li>
              Assisted support team on debugging frontend issues users found in
              an effective manner.
            </li>
          </ul>
        </div>
      </Experience>
    </StyledWorkExperience>
  );
};

export default WorkExperience;

const StyledWorkExperience = styled.section`
  h2 {
    margin-bottom: 24px;
  }
`;

const Experience = styled.div`
  display: grid;
  grid-template-columns: 3fr 8fr;

  div {
    h3 {
      a {
        color: var(--color-white);
      }
    }

    ul {
      margin: 12px 0 0 0;
      padding: 0;

      li:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }

  :not(:last-child) {
    margin-bottom: 36px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;

    div {
      ul {
        list-style-type: none;
      }
    }
  }
`;
