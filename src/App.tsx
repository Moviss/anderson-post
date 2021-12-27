import React, { useState } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { CategoriesList } from './types/Categories';

function App() {
  const [currentCategory, setCurrentCategory] = useState<CategoriesList | 'Breaking News'>('Breaking News');

  return (
    <div>
      <Header />
      <div className="content">
        <Categories setCurrentCategory={setCurrentCategory} />
        <section className="category">
          <div>{currentCategory}</div>
        </section>
        <NewsList currentCategory={currentCategory} />
      </div>
    </div>
  );
}

export default App;
