import React from 'react';
import styles from './NewsCard.module.scss';
import { Article } from '../types/News';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { CategoriesList } from '../types/Categories';

dayjs.extend(relativeTime);

interface NewsCardProps {
  news: Article;
  isHero: boolean;
  currentCategory: CategoriesList | String;
  key?: string;
}

const NewsCard = ({ news, isHero, currentCategory }: NewsCardProps) => {
  if (isHero) {
    return (
      <article className={`${styles.newsCardHero}`}>
        <div className={styles.newsCardHero__image}>
          <img src={news.urlToImage} alt=""/>
        </div>
        <div className={styles.newsCardHero__category}>
          TOP STORY
        </div>
        <a className={styles.newsCardHero__title} href={news.url}>
          {news.title}
        </a>
        <div className={styles.newsCardHero__description}>
          {news.description}
        </div>
        <div className={styles.newsCardHero__meta}>
          {dayjs(news.publishedAt).fromNow()}
        </div>
      </article>
    );
  } else {
    return (
      <article className={`${styles.newsCard}`}>
        <div className={styles.newsCard__column}>
          <div className={styles.newsCard__image}>
            <img src={news.urlToImage} alt=""/>
          </div>
        </div>
        <div className={styles.space} />
        <div className={styles.newsCard__column}>
          <div className={styles.newsCard__category}>
            {currentCategory}
          </div>
          <div className={styles.newsCard__title}>
            {news.title}
          </div>
          <div className={styles.newsCard__meta}>
            {news.author} • {dayjs(news.publishedAt).format('MMMM DD, YYYY')}
          </div>
        </div>
      </article>
    );
  }
};

export default NewsCard;
