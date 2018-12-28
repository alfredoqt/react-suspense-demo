import React from 'react';
import PropTypes from 'prop-types';

import './Spinner.css';
import { capitalize } from '../../utils/string';

const SPINNER_SIZES = {
  small: 30,
  medium: 50,
  large: 70
};

const STROKE_WIDTHS = {
  small: 4,
  medium: 5,
  large: 6
};

function Spinner({ size }) {
  const baseSize = SPINNER_SIZES[size];
  const baseStrokeWidth = STROKE_WIDTHS[size];
  const basePathSize = baseSize / 2;
  const basePathRadius = `${baseSize / 2 - baseStrokeWidth}px`;
  const pathClass = `${capitalize(size)}SpinnerPath`;
  return (
    <div className="SpinnerContainer">
      <svg
        className="Spinner"
        width={baseSize}
        height={baseSize}
        viewBox={`0 0 ${baseSize} ${baseSize}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={pathClass}
          fill="none"
          strokeWidth={baseStrokeWidth}
          strokeLinecap="round"
          cx={basePathSize}
          cy={basePathSize}
          r={basePathRadius}
        />
      </svg>
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Spinner.defaultProps = {
  size: 'small'
};

export default Spinner;
