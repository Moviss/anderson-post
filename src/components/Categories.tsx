import React from 'react';
import styles from './Categories.module.scss';

const categories = [
  'Business',
  'Entertainment',
  'General',
  'Health',
  'Science',
  'Sports',
  'Technology'];

function Categories () {
  return (
    <section className={styles.categories}>
      {categories.map(category => <div className={styles.categories__item}>{category}</div>)}
    </section>
  );
}

export default Categories;
