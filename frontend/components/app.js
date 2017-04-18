import React from 'react';

const App = ({ children }) => {

  return (
    <header>
      <h1>hello from app!</h1>
      { children }
    </header>
  );
};

export default App;
