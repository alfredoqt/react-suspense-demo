import React from 'react';
import FilmListPage from './components/FilmListPage';
import FilmPage from './components/FilmPage';
import Spinner from './components/Spinner';
import scheduleCallback from './utils/scheduleCallback';

class App extends React.Component {
  state = {
    currentId: null,
    showDetail: false
  };

  handleFilmClick = id => {
    this.setState({
      currentId: id,
      showDetail: true
    });
  };

  renderFilmList(loadingId) {
    return (
      <>
        <React.Suspense fallback={<Spinner size="large" />}>
          <FilmListPage
            onFilmClick={this.handleFilmClick}
            loadingId={loadingId}
          />
        </React.Suspense>
      </>
    );
  }

  renderFilm(id) {
    return (
      <>
        <React.Suspense fallback={<Spinner size="large" />}>
          <FilmPage id={id} />
        </React.Suspense>
      </>
    );
  }

  render() {
    const { currentId, showDetail } = this.state;
    return showDetail
      ? this.renderFilm(currentId)
      : this.renderFilmList(currentId);
  }
}

export default App;
