import { RootState } from './store';

export const counterSelector = (state: RootState) => state.value;
