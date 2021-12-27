import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Categories />
        <div></div>
      </div>
    </div>
  );
}

export default App;
