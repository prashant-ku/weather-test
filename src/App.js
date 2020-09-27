import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer  from './redux/rootReducer'
import WeatherDetails from './WeatherDetails'
import saga from './redux/saga/reportSaga'
import './App.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WeatherDetails />
      </Provider>
    </div>
  );
}

export default App;
