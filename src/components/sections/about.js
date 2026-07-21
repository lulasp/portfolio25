import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Claude Code',
    'Agentic AI',
    'n8n',
    'HubSpot',
    'React',
    'JavaScript (ES6+)',
    'CSS/SASS',
    'Git',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
                Hello! My name is Luís Serpa Pinto and I’m from Porto, Portugal! Since early in my life I developed
                an interest in computers, the internet, and their capabilities. As a result of this interest I graduated in Multimedia
                Communication Technologies at <a href="https://www.ismai.pt/pt" target="_blank">ISMAI</a>, all this to achieve my goal: Becoming a web developer.
            </p>

            <p>
              Fast-forward to today, and I’ve worked at a{' '}
              <a href="https://www.technologycatalogue.com/" target="_blank">Dutch start-up</a>, a {' '}
              <a href="https://www.glintt.com/" target="_blank">Portuguese health software company</a>, and later at a{' '}
              <a href="https://youlead.pt/" target="_blank">Lisbon-based marketing automation agency</a>, where I developed a custom HubSpot theme for one of Portugal’s largest insurance companies.
            </p>

            <p>
              Currently, I’m a Lead Frontend Developer at{' '}
              <a href="https://www.visma.com/" target="_blank">Visma</a>, leading the development of a HubSpot theme used by 50+ companies across the group.
            </p>

            <p>
              A big part of my focus these days is <strong>AI</strong>. I use agentic tools like{' '}
              <a href="https://www.claude.com/product/claude-code" target="_blank">Claude Code</a> daily to
              speed up development and cut out repetitive work, and I build automation workflows with{' '}
              <a href="https://n8n.io/" target="_blank">n8n</a> to connect systems and let the machines handle
              the busywork. I’m genuinely excited about how agentic AI is reshaping the way we build for the web.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
