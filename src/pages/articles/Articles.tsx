import { FC, useEffect } from 'react';
import { selectArticles } from '../../store/selectors';
import { fetchArticles } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ArticleCard, ArticleList } from '../../components';

const Articles: FC = () => {
  const articles = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <ArticleList>
      {articles.map((article) => (
        <ArticleCard
          id={article.id}
          imageUrl={article.imageUrl}
          title={article.title}
          publishedAt={article.publishedAt}
          summary={article.summary}
        />
      ))}
    </ArticleList>
  );
};

export { Articles };
