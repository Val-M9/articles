import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../common/types';

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export { useAppSelector };
