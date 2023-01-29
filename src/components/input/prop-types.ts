import { TextFieldProps } from '@mui/material';

export type InputProps = TextFieldProps & {
  placeholder: string;
  style?: string;
  value: any;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};
