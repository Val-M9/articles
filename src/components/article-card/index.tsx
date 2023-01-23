import { FC } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { formatDate } from '../../helpers';
import { ArticleDto } from '../../common/types';
import { AppRoutes } from '../../common/enums';
import { ArrowRight, Calendar } from '../svg';
import styles from './styles.module.scss';

const ArticleCard: FC<Partial<ArticleDto>> = ({ id, imageUrl, publishedAt, title, summary }) => {
  let date = '--/--/----';

  if (publishedAt) {
    date = formatDate(publishedAt);
  }

  return (
    <Grid item xs={4} sm={4} md={4} key={id} display="grid">
      <NavLink to={`${AppRoutes.ARTICLES}${id}`} className={styles.cardWrapper}>
        <Card className={styles.card}>
          <CardMedia component="img" alt="poster" image={imageUrl} className={styles.picture} />
          <CardContent className={styles.cardContent}>
            <Box className={styles.date}>
              <Calendar />
              <Typography>{date}</Typography>
            </Box>
            <Typography variant="h3" className={styles.title}>
              {title}
            </Typography>
            <Typography className={styles.description}>{summary}</Typography>
            <Button className={styles.btn}>
              <Typography>Read more</Typography>
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>
      </NavLink>
    </Grid>
  );
};

export { ArticleCard };
