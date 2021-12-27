import React, { Dispatch, SetStateAction } from 'react';
import styles from './Categories.module.scss';

enum CategoriesList {
  Business = 'Business',
  Entertainment = 'Entertainment',
  General = 'General',
  Health = 'Health',
  Science = 'Science',
  Sports = 'Sports',
  Technology = 'Technology',
}

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
  setCurrentCategory: Dispatch<SetStateAction<string>>;
}


function Categories ({ setCurrentCategory }: CategoriesProps) {
  return (
    <section className={styles.categories}>
      {categories.map(category => <div onClick={() => setCurrentCategory(CategoriesList[category])} className={styles.categories__item}
                                       key={category}>{category}</div>)}
    </section>
  );
}

export default Categories;
