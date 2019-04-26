import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">dúisíonn tú</h1>
        <p className="lead">Tá tú ag chrith leis an fúacht.</p>
        <hr className="my-4" />
        <p>
          Tá tú fliuch báite, ag luí ar úrlár mícothram lán uisce. Tá an túrlár
          ag casadh agus ag lúascadh ar nós bád i stoirm. Tá an dorchadas
          iomlán.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Seas
        </a>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          éist
        </a>

        <a className="btn btn-primary btn-lg" href="#" role="button">
          béic
        </a>
      </div>
    </div>
  );
}

export default App;
