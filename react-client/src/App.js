import React from 'react';
import FilmListPage from './components/FilmListPage';
import Spinner from './components/Spinner';
import scheduleCallback from './utils/scheduleCallback';

// Lazy load the Film Page
const FilmPage = React.lazy(() => import('./components/FilmPage'));

class App extends React.Component {
  state = {
    currentId: null,
    showDetail: false
  };

  handleFilmClick = id => {
    this.setState({
      currentId: id
    });
    scheduleCallback(() => {
      this.setState({
        showDetail: true
      });
    });
  };

  handleBackClick = () => {
    this.setState({
      currentId: null,
      showDetail: false
    });
  };

  renderFilmList(loadingId) {
    return (
      <>
        <React.Suspense maxDuration={0} fallback={<Spinner size="large" />}>
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
        <React.Suspense maxDuration={1500} fallback={<Spinner size="large" />}>
          <FilmPage id={id} onBack={this.handleBackClick} />
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
