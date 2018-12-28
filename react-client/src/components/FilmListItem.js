import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';
import CertifiedFresh from './icons/CertifiedFresh';
import Fresh from './icons/Fresh';
import Rotten from './icons/Rotten';

class FilmListItem extends React.PureComponent {
  render() {
    const { name, grossing, tomatometer } = this.props;
    let CriticsIcon = Rotten;
    if (tomatometer >= 0.75) {
      CriticsIcon = CertifiedFresh;
    } else if (tomatometer >= 0.6) {
      CriticsIcon = Fresh;
    }
    return (
      <li
        style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #262831',
          borderRadius: '4px',
          padding: '8px 16px',
          margin: '24px 0',
          backgroundColor: '#191c25'
        }}
      >
        <Icon
          path={CriticsIcon}
          style={{
            marginRight: '16px'
          }}
        />
        <div>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '4px'
            }}
          >
            {name}
          </h2>
          <p
            style={{
              color: '#8c8f99',
              fontSize: '1rem'
            }}
          >
            {`${Math.floor(tomatometer * 100)}%`} {'-'}{' '}
            {`$${grossing / 1000000}M`}
          </p>
        </div>
      </li>
    );
  }
}

FilmListItem.propTypes = {
  name: PropTypes.string.isRequired,
  grossing: PropTypes.number.isRequired,
  tomatometer: PropTypes.number.isRequired
};

export default FilmListItem;
