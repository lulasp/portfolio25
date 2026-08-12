import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    {/* Hero sits outside <main> so it's edge-to-edge by being 100% of a
        full-width parent — no 100vw full-bleed hack, which overshoots by the
        scrollbar width and leaves the page scrollable sideways. */}
    <Hero />
    <StyledMainContainer className="fillHeight">
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
