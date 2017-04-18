import React from 'react';
import Nav from './nav';

const App = ({ children }) => {

  return (
    <header>
      <h1>Hello from lax!</h1>
      { children }
    </header>
  );
};

export default App;
