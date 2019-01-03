/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: An special resource for an image, the component suspends until the image is loaded
 */

import React from 'react';
import PropTypes from 'prop-types';
import createResource from '../../utils/createResource';

// Must provide a hashing fn for non-primitive types
const hashingFn = ({ src, srcSet }) => `${src}${srcSet}`;

const ImageResource = createResource(
  ({ src, srcSet }) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      if (srcSet) {
        // It does not work otherwise
        image.srcset = srcSet;
      }
      image.onload = () => resolve({ src, srcSet });
      image.onerror = reject;
      image;
    }),
  hashingFn
);

function Img({ src, srcSet, alt, ...rest }) {
  const image = ImageResource.read({ src, srcSet });
  return <img src={image.src} srcSet={image.srcSet} alt={alt} {...rest} />;
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  alt: PropTypes.string
};

Img.defaultProps = {
  srcSet: null,
  alt: null
};

export default Img;
