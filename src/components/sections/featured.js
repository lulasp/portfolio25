import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';
import { useTranslations } from '@i18n';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-sites {
      margin-left: auto;

      @media (max-width: 768px) {
        margin-left: 0;
      }
    }
    .project-sites .carousel-header {
      flex-direction: row-reverse;

      @media (max-width: 768px) {
        flex-direction: row;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-gray);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-bg);
    color: var(--light-gray);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-gray);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-gray);
      }
    }
  }

  .project-sites {
    position: relative;
    z-index: 2;
    margin: 20px 0 0;
    /* Keep the carousel clear of the overlapping project image
       (image overlaps the content column by 1 col here, 3 at 1080). */
    width: 83.333%;

    @media (max-width: 1080px) {
      width: 62.5%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }

    .carousel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 10px;
    }

    .project-sites-label {
      margin: 0;
      color: var(--light-gray);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }

    .carousel-nav {
      display: flex;
      gap: 6px;

      button {
        ${({ theme }) => theme.mixins.flexCenter};
        width: 30px;
        height: 30px;
        padding: 0;
        color: var(--gray);
        background-color: transparent;
        border: 1px solid var(--lightest-bg);
        border-radius: var(--border-radius);
        transition: var(--transition);

        &:hover,
        &:focus {
          color: var(--green);
          border-color: var(--green);
        }

        svg {
          width: 16px;
          height: 16px;
        }
      }
    }

    .carousel-track {
      display: flex;
      gap: 12px;
      margin: 0;
      padding: 0 0 6px;
      list-style: none;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: thin;
      scrollbar-color: var(--lightest-bg) transparent;

      &::-webkit-scrollbar {
        height: 6px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--lightest-bg);
        border-radius: 10px;
      }
    }

    li {
      flex: 0 0 auto;
      width: 100px;
      scroll-snap-align: start;
    }

    a {
      display: block;

      &:hover,
      &:focus {
        outline: 0;

        .site-thumb {
          background: transparent;

          &:before {
            background: transparent;
          }
        }

        .img {
          filter: none;
        }
      }
    }

    .site-thumb {
      ${({ theme }) => theme.mixins.boxShadow};
      position: relative;
      border-radius: var(--border-radius);
      background-color: var(--green);
      overflow: hidden;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--bg);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      transition: var(--transition);
    }

    .site-name {
      display: block;
      margin-top: 6px;
      color: var(--light-gray);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-gray);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      ${({ theme }) => theme.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--bg);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }

  /* Light mode: the dark-mode navy/screen overlay washes the image to white.
     Use a soft green multiply tint that clears on hover instead. */
  [data-theme='light'] & {
    .project-image a {
      background-color: transparent;

      &:before {
        display: block;
        background-color: var(--green);
        mix-blend-mode: multiply;
        opacity: 0.35;
      }

      &:hover,
      &:focus {
        &:before {
          opacity: 0;
        }
        .img {
          filter: none;
        }
      }
    }

    .project-image .img {
      mix-blend-mode: normal;
      filter: grayscale(50%);

      @media (max-width: 768px) {
        filter: grayscale(50%);
      }
    }

    .project-sites .site-thumb {
      background-color: transparent;

      &:before {
        display: block;
        background-color: var(--green);
        mix-blend-mode: multiply;
        opacity: 0.35;
      }
    }

    .project-sites a:hover .site-thumb:before,
    .project-sites a:focus .site-thumb:before {
      opacity: 0;
    }

    .project-sites .img {
      mix-blend-mode: normal;
      filter: grayscale(50%);
    }
  }
`;

const SitesCarousel = ({ sites, prefersReducedMotion }) => {
  const { featured } = useTranslations();
  const trackRef = useRef(null);

  const scrollTrack = dir => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const amount = Math.max(track.clientWidth * 0.8, 120);
    track.scrollBy({ left: dir * amount, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="project-sites">
      <div className="carousel-header">
        <p className="project-sites-label">{featured.sitesLabel}</p>
        <div className="carousel-nav">
          <button type="button" aria-label={featured.prevSites} onClick={() => scrollTrack(-1)}>
            <svg viewBox="0 0 24 24" className="feather" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button type="button" aria-label={featured.nextSites} onClick={() => scrollTrack(1)}>
            <svg viewBox="0 0 24 24" className="feather" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <ul className="carousel-track" ref={trackRef}>
        {sites.map((site, i) => (
          <li key={i}>
            <a href={site.url} aria-label={site.name}>
              <div className="site-thumb">
                <GatsbyImage image={getImage(site.image)} alt={site.name} className="img" />
              </div>
              <span className="site-name">{site.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              tech
              github
              external
              cta
              sites {
                name
                url
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 240
                      height: 150
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const { featured } = useTranslations();
  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        {featured.heading}
      </h2>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter } = node;
            const { external, title, tech, github, cover, cta, sites } = frontmatter;
            const image = getImage(cover);

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content">
                  <div>
                    <p className="project-overline">{featured.overline}</p>

                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>

                    <div className="project-description">
                      <p>{featured.descriptions[title]}</p>
                    </div>

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    {sites && sites.length > 0 && (
                      <SitesCarousel sites={sites} prefersReducedMotion={prefersReducedMotion} />
                    )}

                    <div className="project-links">
                      {cta && (
                        <a href={cta} aria-label={featured.courseLink} className="cta">
                          {featured.learnMore}
                        </a>
                      )}
                      {github && (
                        <a href={github} aria-label={featured.githubLink}>
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && !cta && (
                        <a href={external} aria-label={featured.externalLink} className="external">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <GatsbyImage image={image} alt={title} className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
