import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { formatDate } from '../../helpers';
import { ArticleDto } from '../../common/types';
import { AppRoutes } from '../../common/enums';
import { ArrowRight, Calendar } from '../svg';
import styles from './styles.module.scss';

const ArticleCard = React.forwardRef<HTMLDivElement, Partial<ArticleDto>>((props, ref) => {
  let date = '--/--/----';

  if (props.publishedAt) {
    date = formatDate(props.publishedAt);
  }

  return (
    <Grid ref={ref} item xs={4} sm={4} md={4} key={props.id} display="grid">
      <NavLink to={`${AppRoutes.ARTICLES}${props.id}`} className={styles.cardWrapper}>
        <Card className={styles.card}>
          <CardMedia
            component="img"
            alt="poster"
            image={props.imageUrl}
            className={styles.picture}
          />
          <CardContent className={styles.cardContent}>
            <Box className={styles.date}>
              <Calendar />
              <Typography>{date}</Typography>
            </Box>
            <Typography variant="h3" className={styles.title}>
              {props.title}
            </Typography>
            <Typography className={styles.description}>{props.summary}</Typography>
            <Button className={styles.btn}>
              <Typography>Read more</Typography>
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>
      </NavLink>
    </Grid>
  );
});

export { ArticleCard };
