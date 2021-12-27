import React, { useEffect, useState } from 'react';
import styles from './NewsList.module.scss';
import axios from 'axios';
import { Article } from '../types/News';
import { CategoriesList } from '../types/Categories';
import NewsCard from './NewsCard';

interface NewsListProps {
  currentCategory: 'Breaking News' | CategoriesList;
}

const APIKEY = '9abf605c94544df181133c876281ec23';

const NewsList = ({ currentCategory }: NewsListProps) => {
  const [newsData, setNewsData] = useState<Array<Article> | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchNews = async () => {
    setIsLoading(true);
    // eslint-disable-next-line no-template-curly-in-string
    await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${currentCategory !==
      'Breaking News'
        ? '&category=' + currentCategory
        : ''}&pageSize=11&page=1&apiKey=${APIKEY}`).then(result => {
      setHasError(false);
      setNewsData(result.data.articles);
    }).catch(err => setHasError(true)).finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchNews();
  }, [currentCategory]);

  return (
    <section className={styles.newsList}>
      {hasError && !isLoading &&
      <div className={styles.info}>Some error occurred.</div>}

      {(!isLoading) ? newsData.map(
        (newsItem, index) => (<NewsCard isHero={index === 0} news={newsItem}
                                        currentCategory={currentCategory}
                                        key={newsItem.title}/>)) : <div
        className={styles.info}>Loading news...</div>}
    </section>
  );
};

export default NewsList;
