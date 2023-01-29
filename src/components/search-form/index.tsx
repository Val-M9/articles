import { FC } from 'react';
import { useFormik } from 'formik';
import { Typography } from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { setSearchQuery } from '../../store/actions';
import { Input, SearchIcon } from '../';
import styles from './styles.module.scss';

const SearchForm: FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: ({ search }) => {
      dispatch(setSearchQuery(search));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.search}>
      <Typography variant="h4">Filter by keywords</Typography>
      <Input
        Icon={SearchIcon}
        placeholder="Search by title"
        value={formik.values.search}
        onChange={formik.handleChange}
      />
    </form>
  );
};

export { SearchForm };
