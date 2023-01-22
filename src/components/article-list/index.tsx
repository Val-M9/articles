import { FC } from 'react';
import { Grid } from '@mui/material';
import { ArticleCard } from '../article-card';
import { ArticleListProps } from './prop-types';

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <Grid container spacing={{ xs: 3, sm: 5, md: 5 }} columns={{ xs: 1, sm: 8, md: 12 }}>
      {articles.map((article) => (
        <ArticleCard
          id={article.id}
          imageUrl={article.imageUrl}
          title={article.title}
          publishedAt={article.publishedAt}
          summary={article.summary}
        />
      ))}
    </Grid>
  );
};

export { ArticleList };
