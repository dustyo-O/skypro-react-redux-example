import React, { useCallback, useState } from 'react';
import { Provider } from 'react-redux';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
