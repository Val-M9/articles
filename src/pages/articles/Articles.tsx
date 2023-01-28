import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { selectArticlesDataStatus, selectArticlesTotalCount } from '../../store/selectors';
import { useAppSelector } from '../../hooks';
import { DataStatus } from '../../common/enums';
import { ArticleList, Loader, SearchInput } from '../../components';
import styles from './styles.module.scss';

const Articles: FC = () => {
  const totalCount = useAppSelector(selectArticlesTotalCount);
  const isLoading = useAppSelector(selectArticlesDataStatus) === DataStatus.PENDING;

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.container}>
        <Typography variant="h5">Filter by keywords</Typography>
        <SearchInput placeholder="Search articles" style={styles.search} />
        <Typography variant="h5">Results: {totalCount}</Typography>
        <ArticleList totalCount={totalCount} />
        {isLoading && <Loader />}
      </Box>
    </Box>
  );
};

export { Articles };
