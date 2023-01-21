import { FC } from 'react';
import { Grid, Box } from '@mui/material';
import { ArticleListProps } from './prop-types';
import styles from './styles.module.scss';

const ArticleList: FC<ArticleListProps> = ({ children }) => {
  return (
    <Box className={styles.container}>
      <Grid container spacing={{ xs: 3, md: 5 }} columns={3} className={styles.listWrapper}>
        {children}
      </Grid>
    </Box>
  );
};

export { ArticleList };
