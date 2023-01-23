import { FC, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOneArticle } from '../../store/actions';
import { selectCurrentArticle } from '../../store/selectors';
import { ArticleInfo, ArrowLeft } from '../../components';
import styles from './styles.module.scss';

const ArticlePage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const article = useAppSelector(selectCurrentArticle);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneArticle(id));
    }
  }, [dispatch, id]);

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <Box className={styles.wrapper}>
      <ArticleInfo imageUrl={article?.imageUrl} title={article?.title} summary={article?.summary} />
      <Button className={styles.btn} onClick={onGoBack}>
        <ArrowLeft />
        <Typography> Back to homepage</Typography>
      </Button>
    </Box>
  );
};

export { ArticlePage };
