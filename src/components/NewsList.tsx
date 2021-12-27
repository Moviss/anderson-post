import React, { useEffect, useRef, useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState(1);

  function usePrevious(value: any) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevCategory = usePrevious(currentCategory);

  const loadMore = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  useEffect(() => {
    const fetchNews = async () => {
      let loadingMore = true;
      setIsLoading(true);
      if(prevCategory !== currentCategory) {
        await setNewsData([]);
        await setCurrentPage(1);
        loadingMore = false;
      }
      // eslint-disable-next-line no-template-curly-in-string
      await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us${currentCategory !==
        'Breaking News'
          ? '&category=' + currentCategory
          : ''}&pageSize=10&page=${currentPage}&apiKey=${APIKEY}`).
        then(result => {
          setHasError(false);
          if (loadingMore) {
            setNewsData(prevData => [...prevData, ...result.data.articles]);
          } else {
            setNewsData(result.data.articles);
          }

        });
    };

    fetchNews().
      catch(err => setHasError(true)).
      finally(() => setIsLoading(false));
  }, [currentCategory, currentPage]);

  return (
    <>
      <section className={styles.newsList}>
        <>
          {newsData.map(
            (newsItem, index) => (
              <NewsCard isHero={index === 0} news={newsItem}
                        currentCategory={currentCategory}
                        key={newsItem.title}/>
            ))}

          {hasError && !isLoading &&
          <div className={styles.info}>Some error occurred when fetching fresh news.</div>}

          <div onClick={() => loadMore()}
               className={styles.loadMoreBtn}>{isLoading
            ? 'Loading...'
            : 'LOAD MORE'}
          </div>
        </>
      </section>
    </>
  );
};

export default NewsList;
