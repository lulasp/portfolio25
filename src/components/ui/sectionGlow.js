import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// A discreet, blurred gradient blob for section backgrounds — the same shape as
// the hero blobs but far subtler (lower opacity). Like the hero, the blur lives
// on the OUTER wrapper and the clip-path on the INNER shape: applying both to
// one element would re-clip the blurred result back to the hard polygon and
// give sharp edges. Additive light only, so it blends over the film grain with
// no seam.

const BLOB_CLIP =
  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)';

const StyledGlow = styled.div`
  position: absolute;
  z-index: -1;
  pointer-events: none;
  width: min(55rem, 85vw);
  aspect-ratio: 1155 / 678;
  filter: blur(70px);
  opacity: 0.14;

  ${({ position }) => (position === 'bottom' ? 'bottom: -20rem;' : 'top: -20rem;')}
  /* Bleed past the section, but never past the page gutter — below ~1200px the
     sections are gutter-bound, so a flat -8rem would push the blob off the
     viewport and make the document wider than the screen. Containers that are
     already full-width (a direct child of <main>) pass bleed="none". */
  ${({ align, bleed }) => {
    const offset = bleed === 'none' ? '0px' : 'calc(-1 * min(8rem, var(--gutter, 8rem)))';
    return align === 'right' ? `right: ${offset};` : `left: ${offset};`;
  }}

  .glow-shape {
    width: 100%;
    height: 100%;
    clip-path: ${BLOB_CLIP};
    background: linear-gradient(to top right, var(--green), var(--blue));
  }

  @media (max-width: 768px) {
    width: min(40rem, 90vw);
    opacity: 0.1;
  }
`;

const SectionGlow = ({ position, align, bleed }) => (
  <StyledGlow aria-hidden="true" position={position} align={align} bleed={bleed}>
    <div className="glow-shape" />
  </StyledGlow>
);

SectionGlow.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']),
  align: PropTypes.oneOf(['left', 'right']),
  bleed: PropTypes.oneOf(['gutter', 'none']),
};

SectionGlow.defaultProps = {
  position: 'top',
  align: 'left',
  bleed: 'gutter',
};

export default SectionGlow;
