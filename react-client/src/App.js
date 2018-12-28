import React from 'react';
import FilmListPage from './components/FilmListPage';
import Spinner from './components/Spinner';

class App extends React.Component {
  render() {
    return (
      <>
        <React.Suspense fallback={<Spinner size="large" />}>
          <FilmListPage />
        </React.Suspense>
      </>
    );
  }
}

export default App;
