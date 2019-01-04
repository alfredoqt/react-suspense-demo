import React from 'react';
import PropTypes from 'prop-types';
import createResource from '../../utils/createResource';
import { fetchFilmDetailsJSON } from '../../api';
import Img from '../Img';
import Icon from '../Icon';
import Fresh from '../icons/Fresh';
import Upright from '../icons/Upright';

const FilmDetailsResource = createResource(fetchFilmDetailsJSON);

function FilmDetails({ id }) {
  const film = FilmDetailsResource.read(id);
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: '32px'
      }}
    >
      <React.Suspense
        maxDuration={0}
        fallback={<img src={film.poster} alt={film.name} />}
      >
        <Img src={film.poster} alt={film.name} />
      </React.Suspense>
      <div
        style={{
          paddingLeft: '24px',
          paddingTop: '16px',
          flex: 1
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}
        >
          {film.name}
        </h1>
        <hr
          style={{
            borderColor: '#8c8f99',
            margin: '16px 0'
          }}
        />
        <div
          style={{
            display: 'flex',
            marginBottom: '16px'
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                color: '#8c8f99',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '1rem',
                marginBottom: '8px'
              }}
            >
              Tomatometer
            </h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Icon
                path={Fresh}
                style={{
                  marginRight: '4px'
                }}
                size={1.5}
              />
              <p
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}
              >{`${Math.floor(film.tomatometer * 100)}%`}</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h2
              style={{
                color: '#8c8f99',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '1rem',
                marginBottom: '8px'
              }}
            >
              Audience
            </h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Icon
                path={Upright}
                style={{
                  marginRight: '4px'
                }}
                size={1.5}
              />
              <p
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}
              >{`${Math.floor(film.audience_rating * 100)}%`}</p>
            </div>
          </div>
        </div>
        <div>
          <h2
            style={{
              color: '#8c8f99',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: '1rem',
              marginBottom: '8px'
            }}
          >
            Critics Consensus
          </h2>
          <p
            style={{
              lineHeight: '1.6'
            }}
          >
            {film.critics_consensus}
          </p>
        </div>
      </div>
    </div>
  );
}

FilmDetails.propTypes = {
  id: PropTypes.string.isRequired
};

export default FilmDetails;
