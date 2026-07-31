import React from 'react';
import { useTranslations } from '@i18n';
import { HeroLanding } from '@components';

const Hero = () => {
  const { hero } = useTranslations();

  // Keep the Visma hyperlink from the original intro paragraph.
  const description = (
    <>
      {hero.introBefore}
      <a href="https://www.visma.com/" target="_blank" rel="noreferrer">
        {hero.introCompany}
      </a>
      {hero.introAfter}
    </>
  );

  return (
    <HeroLanding
      showNav={false}
      announcementBanner={{ text: hero.overline, linkText: hero.name }}
      title={hero.tagline}
      description={description}
      gradientColors={{ from: 'var(--green)', to: 'var(--blue)' }}
      callToActions={[{ text: hero.cta, href: '#projects', variant: 'primary' }]}
    />
  );
};

export default Hero;
