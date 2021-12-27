import React, { useState } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';

function App() {
  const [currentCategory, setCurrentCategory] = useState('Breaking News');

  return (
    <div>
      <Header />
      <div className="content">
        <Categories setCurrentCategory={setCurrentCategory} />
        <section className="category">
          <div>{currentCategory}</div>
        </section>
      </div>
    </div>
  );
}

export default App;
