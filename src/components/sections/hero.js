import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { useTranslations } from '@i18n';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  position: relative;

  /* Ambient lime glow behind the hero text */
  &:before {
    content: '';
    position: absolute;
    top: 12%;
    left: 32%;
    transform: translateX(-50%);
    width: min(900px, 90vw);
    height: 620px;
    background: var(--hero-glow);
    filter: blur(50px);
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  .overline {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--gray);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { hero } = useTranslations();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <p className="overline">{hero.overline}</p>;
  const two = <h1 className="big-heading">{hero.name}</h1>;
  const three = <h3 className="big-heading">{hero.tagline}</h3>;
  const four = (
    <>
      <p>
        {hero.introBefore}
        <a href="https://www.visma.com/" target="_blank" rel="noreferrer">
          {hero.introCompany}
        </a>
        {hero.introAfter}
      </p>

    </>
  );
  const five = (
    <a
      className="email-link"
      href="#projects"
      rel="noreferrer">
      {hero.cta}
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
