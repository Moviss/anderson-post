import React, { Dispatch, SetStateAction } from 'react';
import styles from './Categories.module.scss';
import { CategoriesList } from '../types/Categories';

const categories: CategoriesList[] = [
  CategoriesList.Business,
  CategoriesList.Entertainment,
  CategoriesList.General,
  CategoriesList.Health,
  CategoriesList.Science,
  CategoriesList.Sports,
  CategoriesList.Technology,
];

interface CategoriesProps {
  setCurrentCategory: Dispatch<SetStateAction<'Breaking News' | CategoriesList>>;
  currentCategory: CategoriesList | 'Breaking News';
}

function Categories ({ setCurrentCategory, currentCategory }: CategoriesProps) {
  return (
    <section className={styles.categories}>
      {categories.map(category => <div
        onClick={() => setCurrentCategory(CategoriesList[category])}
        className={`${styles.categories__item} ${currentCategory === category
          ? styles['categories__item--selected']
          : ''}`}
        key={category}>{category}</div>)}
    </section>
  );
}

export default Categories;
