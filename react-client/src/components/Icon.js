import React from 'react';
import PropTypes from 'prop-types';

function Icon({ path: IconComponent, size, ...rest }) {
  const baseSize = `${size * 1.5}rem`;
  return <IconComponent width={baseSize} height={baseSize} {...rest} />;
}

Icon.propTypes = {
  path: PropTypes.any.isRequired,
  size: PropTypes.number
};

Icon.defaultProps = {
  size: 1
};

export default Icon;
