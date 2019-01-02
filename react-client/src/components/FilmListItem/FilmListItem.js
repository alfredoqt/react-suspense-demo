import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import CertifiedFresh from '../icons/CertifiedFresh';
import Fresh from '../icons/Fresh';
import Rotten from '../icons/Rotten';
import ChevronRight from '../icons/ChevronRight';
import './FilmListItem.css';
import Spinner from '../Spinner';

class FilmListItem extends React.PureComponent {
  render() {
    const { name, grossing, tomatometer, isLoading, onClick } = this.props;
    let CriticsIcon = Rotten;
    if (tomatometer >= 0.75) {
      CriticsIcon = CertifiedFresh;
    } else if (tomatometer >= 0.6) {
      CriticsIcon = Fresh;
    }
    return (
      <li>
        <div
          onClick={onClick}
          className="FilmListItemContainer"
          role="presentation"
        >
          <Icon
            path={CriticsIcon}
            style={{
              marginRight: '16px'
            }}
          />
          <div style={{ flex: 1 }}>
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
          {isLoading ? (
            <Spinner size="small" />
          ) : (
            <Icon path={ChevronRight} className="FilmListItemGoToDetails" />
          )}
        </div>
      </li>
    );
  }
}

FilmListItem.propTypes = {
  name: PropTypes.string.isRequired,
  grossing: PropTypes.number.isRequired,
  tomatometer: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FilmListItem;
