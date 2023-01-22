import { FC, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { selectArticles } from '../../store/selectors';
import { fetchArticles } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ArticleCard, ArticleList, SearchInput } from '../../components';
import styles from './styles.module.scss';

const Articles: FC = () => {
  const articles = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.container}>
        <Typography variant="h5">Filter by keywords</Typography>
        <SearchInput placeholder="Search articles" style={styles.search} />
        <ArticleList articles={articles} />
      </Box>
    </Box>
  );
};

export { Articles };
