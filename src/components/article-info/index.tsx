import React, { FC } from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { ArticleDto } from '../../common/types';
import styles from './styles.module.scss';

const ArticleInfo: FC<Partial<ArticleDto>> = ({ imageUrl, title, summary }) => {
  const text = new Array(10).fill(summary);
  return (
    <Box className={styles.wrapper}>
      <img src={imageUrl} alt="poster" className={styles.picture} />
      <Paper className={styles.article}>
        <Typography variant="h2">{title}</Typography>
        {text.map((item, index) => (
          <React.Fragment key={index}>
            <Typography>{item}</Typography>
          </React.Fragment>
        ))}
      </Paper>
    </Box>
  );
};

export { ArticleInfo };
