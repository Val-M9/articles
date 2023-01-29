import React from 'react';
import { Grid } from '@mui/material';
import { ArticleCard } from '../';
import { ArticleListProps } from './prop-types';

const ArticleList = React.forwardRef<HTMLDivElement, ArticleListProps>((props, ref) => {
  return (
    <Grid container spacing={{ xs: 3, sm: 5, md: 5 }} columns={{ xs: 1, sm: 8, md: 12 }}>
      {props.articles.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          imageUrl={article.imageUrl}
          title={article.title}
          publishedAt={article.publishedAt}
          summary={article.summary}
          ref={ref}
        />
      ))}
    </Grid>
  );
});

export { ArticleList };
