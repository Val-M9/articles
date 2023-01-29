import { FC } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { InputProps } from './prop-types';
import styles from './styles.module.scss';

const Input: FC<InputProps> = ({ placeholder, style, value, onChange, Icon }) => {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      className={`${styles.search} ${style}`}
      name="search"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className={styles.icon}>
            <Icon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export { Input };
