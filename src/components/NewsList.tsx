import React, { useEffect, useState } from 'react';
import styles from './NewsList.module.scss';
import axios from 'axios';
import { Article } from '../types/News';
import { CategoriesList } from '../types/Categories';

interface NewsListProps {
  currentCategory: "" | CategoriesList
}

const APIKEY = '9abf605c94544df181133c876281ec23';

const NewsList = ({currentCategory}: NewsListProps) => {
  const [newsData, setNewsData] = useState<Array<Article> | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async () => {
    setIsLoading(true);
    // eslint-disable-next-line no-template-curly-in-string
    const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us${currentCategory ? '&category=' + currentCategory : ''}&pageSize=11&page=1&apiKey=${APIKEY}`);
    setNewsData(result.data.articles);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchNews();
  }, [currentCategory]);


  return (
    <section className={styles.newsList}>
      {newsData.map(newsItem => (<div key={newsItem.title}>{newsItem.title}</div>))}
    </section>
  );
};

export default NewsList;
