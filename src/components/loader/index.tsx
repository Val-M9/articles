import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';
import styles from './styles.module.scss';

const Loader: FC = () => {
  return (
    <Box className={styles.loaderBox}>
      <CircularProgress className={styles.loader} />
    </Box>
  );
};

export { Loader };
