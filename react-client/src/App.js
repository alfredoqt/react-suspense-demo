import React from 'react';
import FilmListPage from './components/FilmListPage';

class App extends React.Component {
  render() {
    return (
      <>
        <React.Suspense fallback={<p>Loading...</p>}>
          <FilmListPage />
        </React.Suspense>
      </>
    );
  }
}

export default App;
