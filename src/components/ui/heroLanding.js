import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { usePrefersReducedMotion } from '@hooks';

// Ported from a Next.js/Tailwind/shadcn "hero-1" component to this project's
// Gatsby + styled-components stack. Same props API and layout; Tailwind classes
// mapped to theme CSS variables, Radix Dialog replaced with a styled slide-in
// panel, and lucide icons replaced with inline SVGs (no extra deps).

const MenuIcon = props => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = props => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const StyledHero = styled.div`
  position: relative;
  min-height: 100vh;
  /* Edge-to-edge by sitting outside <main> (see pages/index.js), so plain 100%
     is exact. Don't reintroduce a 100vw full-bleed: 100vw includes the
     scrollbar, so it overflows the client area and body stays sideways-scrollable. */
  width: 100%;
  overflow: hidden;
  color: var(--lightest-gray);

  /* Blob layer, masked so the green glow fades to transparent before the
     hero's bottom edge. No opaque overlay here on purpose: the page's global
     film grain lives behind everything, so painting opaque bg would hide the
     grain and create a visible seam against the (grainy) About section.
     Fading the glow out instead lets the untouched grain+bg show through and
     blend seamlessly into the next section. */
  .gradient-layer {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Decorative gradient blobs (top + bottom) */
  .gradient-blob {
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    filter: blur(64px);
    transform: translateZ(0);
    pointer-events: none;
  }
  .gradient-blob--top {
    top: -10rem;
    @media (min-width: 640px) {
      top: -20rem;
    }
  }
  .gradient-blob--bottom {
    top: calc(100% - 13rem);
    @media (min-width: 640px) {
      top: calc(100% - 30rem);
    }
  }
  .gradient-blob__shape {
    position: relative;
    left: calc(50% - 11rem);
    aspect-ratio: 1155 / 678;
    width: 36.125rem;
    max-width: none;
    transform: translateX(-50%) rotate(30deg);
    opacity: 0.3;
    @media (min-width: 640px) {
      left: calc(50% - 30rem);
      width: 72.1875rem;
    }
  }
  .gradient-blob--bottom .gradient-blob__shape {
    left: calc(50% + 3rem);
    transform: translateX(-50%);
    @media (min-width: 640px) {
      left: calc(50% + 36rem);
    }
  }
`;

const StyledHeader = styled.header`
  position: absolute;
  inset: 0 0 auto 0;
  z-index: 1;

  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 24px;
    @media (min-width: 1024px) {
      padding: 24px 32px;
    }
  }

  .logo img {
    height: 32px;
    width: auto;
  }

  .nav-links {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
      gap: 48px;
    }
  }

  .nav-links a,
  .login-link a {
    ${({ theme }) => theme.mixins.link};
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 600;
  }

  .login-link {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
  }

  .hamburger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 0;
    background: transparent;
    color: var(--gray);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--lightest-gray);
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

const StyledMobileMenu = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    background: var(--bg-shadow);
    opacity: ${props => (props.open ? 1 : 0)};
    visibility: ${props => (props.open ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  .panel {
    position: fixed;
    inset: 0 0 0 auto;
    z-index: 51;
    width: 100%;
    max-width: 24rem;
    padding: 24px;
    overflow-y: auto;
    background: var(--light-bg);
    box-shadow: -10px 0 30px -15px var(--bg-shadow);
    transform: translateX(${props => (props.open ? 0 : 100)}%);
    transition: var(--transition);
  }

  .panel-top {
    ${({ theme }) => theme.mixins.flexBetween};
  }
  .panel-top img {
    height: 32px;
    width: auto;
  }
  .close-btn {
    display: inline-flex;
    padding: 10px;
    border: 0;
    background: transparent;
    color: var(--gray);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--lightest-gray);
    }
  }

  .panel-links {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
  }
  .panel-links a {
    ${({ theme }) => theme.mixins.link};
    padding: 10px 12px;
    border-radius: var(--border-radius);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 600;
    &:hover {
      background: var(--green-tint);
    }
  }
  .panel-login {
    margin-top: 24px;
    border-top: 1px solid var(--lightest-bg);
    padding-top: 24px;
  }
`;

const StyledContent = styled.div`
  position: relative;
  isolation: isolate;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .inner {
    margin: 0 auto;
    max-width: 56rem;
    padding: 0 50px;
    text-align: center;

    @media (max-width: 480px) {
      padding: 0 25px;
    }
  }

  /* Staggered entrance. The hero mounts hidden, then \`mounted\` flips on the next
     frame to trigger the fade-up transition (one item after another). */
  @media (prefers-reduced-motion: no-preference) {
    .inner > * {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 800ms var(--easing), transform 800ms var(--easing);
    }
    .inner > *:nth-child(1) { transition-delay: 150ms; }
    .inner > *:nth-child(2) { transition-delay: 300ms; }
    .inner > *:nth-child(3) { transition-delay: 450ms; }
    .inner > *:nth-child(4) { transition-delay: 600ms; }
    .inner > *:nth-child(5) { transition-delay: 750ms; }

    ${({ $mounted }) =>
    $mounted &&
      css`
        .inner > * {
          opacity: 1;
          transform: translateY(0);
        }
      `}
  }

  .announcement {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
  }
  .announcement > div {
    position: relative;
    border-radius: 9999px;
    padding: 4px 12px;
    font-size: var(--fz-heading);
    color: var(--gray);
  }
  .announcement a {
    ${({ theme }) => theme.mixins.inlineLink};
    font-weight: 600;
    color: var(--green);
  }
  .announcement .name {
    color: var(--green);
    font-weight: 600;
  }

  h1 {
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.05;
    color: var(--lightest-gray);
  }
  h1.small {
    font-size: clamp(1.5rem, 5vw, 3rem);
  }
  h1.medium {
    font-size: clamp(1.5rem, 6vw, 3.75rem);
  }
  h1.large {
    font-size: clamp(1.875rem, 7vw, 4.5rem);
  }

  h2.subtitle {
    margin-top: 4px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.05;
    color: var(--gray);
    font-size: clamp(1.25rem, 4.5vw, 2.75rem);
  }

  .description {
    margin: 24px auto 0;
    max-width: 42rem;
    font-size: var(--fz-lg);
    font-weight: 500;
    color: var(--gray);
    @media (min-width: 640px) {
      margin-top: 32px;
      font-size: var(--fz-xl);
    }
  }

  .cta-row {
    margin-top: 40px;
    ${({ theme }) => theme.mixins.flexCenter};
    gap: 24px;
  }
  .cta-primary {
    ${({ theme }) => theme.mixins.smallButton};
  }
  .cta-secondary {
    ${({ theme }) => theme.mixins.link};
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 600;
  }
`;

const defaultProps = {
  logo: {
    src: 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600',
    alt: 'Company Logo',
    companyName: 'Your Company',
  },
  navigation: [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ],
  loginText: 'Log in',
  loginHref: '#',
  showNav: true,
  titleSize: 'large',
  gradientColors: {
    from: 'var(--green)',
    to: 'var(--pink)',
  },
  callToActions: [
    { text: 'Get started', href: '#', variant: 'primary' },
    { text: 'Learn more', href: '#', variant: 'secondary' },
  ],
};

const BLOB_CLIP =
  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)';

const HeroLanding = props => {
  const {
    logo,
    navigation,
    loginText,
    loginHref,
    showNav,
    title,
    titleColor,
    subtitle,
    description,
    announcementBanner,
    callToActions,
    titleSize,
    gradientColors,
    className,
  } = { ...defaultProps, ...props };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Entrance animation: mount hidden, then flip on the next frame so the CSS
  // transition fires. Skipped (shown immediately) when reduced motion is on.
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (prefersReducedMotion) {
      setMounted(true);
      return undefined;
    }
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, [prefersReducedMotion]);

  // Close the mobile panel once the viewport is back to desktop width.
  useEffect(() => {
    const onResize = e => {
      if (e.currentTarget.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const blobStyle = {
    clipPath: BLOB_CLIP,
    background: `linear-gradient(to top right, ${gradientColors.from}, ${gradientColors.to})`,
  };

  const renderCta = (cta, index) =>
    cta.variant === 'primary' ? (
      <a key={index} href={cta.href} className="cta-primary">
        {cta.text}
      </a>
    ) : (
      <a key={index} href={cta.href} className="cta-secondary">
        {cta.text} <span aria-hidden="true">→</span>
      </a>
    );

  return (
    <StyledHero className={className}>
      <div aria-hidden="true" className="gradient-layer">
        <div className="gradient-blob gradient-blob--top">
          <div className="gradient-blob__shape" style={blobStyle} />
        </div>
        <div className="gradient-blob gradient-blob--bottom">
          <div className="gradient-blob__shape" style={blobStyle} />
        </div>
      </div>

      {showNav && (
      <StyledHeader>
        <nav aria-label="Global">
          <div className="logo">
            <a href="/">
              <span className="sr-only">{logo.companyName}</span>
              <img alt={logo.alt} src={logo.src} />
            </a>
          </div>

          <button
            type="button"
            className="hamburger"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu">
            <MenuIcon aria-hidden="true" />
          </button>

          {navigation && navigation.length > 0 && (
            <div className="nav-links">
              {navigation.map(item => (
                <a key={item.name} href={item.href}>
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {loginText && loginHref && (
            <div className="login-link">
              <a href={loginHref}>
                {loginText} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          )}
        </nav>

        <StyledMobileMenu open={mobileMenuOpen}>
          <div
            className="overlay"
            role="presentation"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="panel" role="dialog" aria-modal="true">
            <div className="panel-top">
              <a href="/">
                <span className="sr-only">{logo.companyName}</span>
                <img alt={logo.alt} src={logo.src} />
              </a>
              <button
                type="button"
                className="close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu">
                <CloseIcon aria-hidden="true" />
              </button>
            </div>

            {navigation && navigation.length > 0 && (
              <div className="panel-links">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </a>
                ))}
              </div>
            )}

            {loginText && loginHref && (
              <div className="panel-login">
                <a href={loginHref} onClick={() => setMobileMenuOpen(false)}>
                  {loginText}
                </a>
              </div>
            )}
          </div>
        </StyledMobileMenu>
      </StyledHeader>
      )}

      <StyledContent $mounted={mounted}>
        <div className="inner">
          {announcementBanner && (
            <div className="announcement">
              <div>
                {announcementBanner.text}{' '}
                {announcementBanner.linkHref ? (
                  <a href={announcementBanner.linkHref}>
                    <span aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />
                    {announcementBanner.linkText} <span aria-hidden="true">&rarr;</span>
                  </a>
                ) : (
                  announcementBanner.linkText && (
                    <span className="name">{announcementBanner.linkText}</span>
                  )
                )}
              </div>
            </div>
          )}

          <h1 className={titleSize} style={titleColor ? { color: titleColor } : undefined}>
            {title}
          </h1>
          {subtitle && <h2 className="subtitle">{subtitle}</h2>}
          <p className="description">{description}</p>

          {callToActions && callToActions.length > 0 && (
            <div className="cta-row">{callToActions.map(renderCta)}</div>
          )}
        </div>
      </StyledContent>
    </StyledHero>
  );
};

const ctaShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
});

HeroLanding.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    companyName: PropTypes.string,
  }),
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ),
  loginText: PropTypes.string,
  loginHref: PropTypes.string,
  showNav: PropTypes.bool,
  title: PropTypes.node.isRequired,
  titleColor: PropTypes.string,
  subtitle: PropTypes.node,
  description: PropTypes.node.isRequired,
  announcementBanner: PropTypes.shape({
    text: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    linkHref: PropTypes.string,
  }),
  callToActions: PropTypes.arrayOf(ctaShape),
  titleSize: PropTypes.oneOf(['small', 'medium', 'large']),
  gradientColors: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default HeroLanding;
