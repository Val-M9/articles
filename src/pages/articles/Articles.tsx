import { FC, useRef, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import {
  selectArticlesDataStatus,
  selectArticlesTotalCount,
  selectArticles,
  selectCurrentCount,
  selectSearchQuery,
} from '../../store/selectors';
import { fetchArticles } from '../../store/actions';
import { useAppSelector, useAppDispatch, useIntersectionObserver } from '../../hooks';
import { DataStatus } from '../../common/enums';
import { ArticleList, Loader, SearchForm } from '../../components';
import styles from './styles.module.scss';

const Articles: FC = () => {
  const totalCount = useAppSelector(selectArticlesTotalCount);
  const isLoading = useAppSelector(selectArticlesDataStatus) === DataStatus.PENDING;
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);
  const currentCount = useAppSelector(selectCurrentCount);
  const searchQuery = useAppSelector(selectSearchQuery);

  let observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  const onIntersectCallback = useCallback(() => {
    dispatch(fetchArticles({ start: currentCount, limit: 20, query: searchQuery }));
  }, [currentCount, dispatch, searchQuery]);

  useIntersectionObserver({
    currentCount,
    totalCount,
    observer,
    lastItemRef,
    itemsList: articles,
    onIntersectCallback,
  });

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.container}>
        <SearchForm />
        <Typography variant="h5">Results: {totalCount}</Typography>
        <ArticleList articles={articles} ref={lastItemRef} />
        {isLoading && <Loader />}
      </Box>
    </Box>
  );
};

export { Articles };
