import { FC, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  selectArticles,
  selectArticlesDataStatus,
  selectArticlesTotalCount,
} from '../../store/selectors';
import { fetchArticles } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ArticleList, SearchInput, Loader } from '../../components';
import styles from './styles.module.scss';
import { DataStatus } from '../../common/enums';

const Articles: FC = () => {
  const articles = useAppSelector(selectArticles);
  const totalCount = useAppSelector(selectArticlesTotalCount);
  const isLoading = useAppSelector(selectArticlesDataStatus) === DataStatus.PENDING;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles({ start: 1 }));
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box className={styles.wrapper}>
          <Box className={styles.container}>
            <Typography variant="h5">Filter by keywords</Typography>
            <SearchInput placeholder="Search articles" style={styles.search} />
            <Typography variant="h5">Results: {totalCount}</Typography>
            <ArticleList articles={articles} />
          </Box>
        </Box>
      )}
    </>
  );
};

export { Articles };
