import { FC } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { SearchIcon } from '../svg/';
import { SearchProps } from './prop-types';
import styles from './styles.module.scss';

const SearchInput: FC<SearchProps> = ({ placeholder, style }) => {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      className={`${styles.search} ${style}`}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className={styles.icon}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export { SearchInput };
