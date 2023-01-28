import { FC, useRef, useCallback } from 'react';
import { Grid } from '@mui/material';
import { selectArticles, selectCurrentCount } from '../../store/selectors';
import { useAppDispatch, useAppSelector, useIntersectionObserver } from '../../hooks';
import { fetchArticles } from '../../store/actions';
import { ArticleCard } from '../';
import { ArticleListProps } from './prop-types';

const ArticleList: FC<ArticleListProps> = ({ totalCount }) => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);
  const currentCount = useAppSelector(selectCurrentCount);

  let observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  const onIntersectCallback = useCallback(() => {
    dispatch(fetchArticles({ start: currentCount, limit: 20 }));
  }, [currentCount, dispatch]);

  useIntersectionObserver({
    currentCount,
    totalCount,
    observer,
    lastItemRef,
    itemsList: articles,
    onIntersectCallback,
  });

  return (
    <Grid container spacing={{ xs: 3, sm: 5, md: 5 }} columns={{ xs: 1, sm: 8, md: 12 }}>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          imageUrl={article.imageUrl}
          title={article.title}
          publishedAt={article.publishedAt}
          summary={article.summary}
          ref={lastItemRef}
        />
      ))}
    </Grid>
  );
};

export { ArticleList };
