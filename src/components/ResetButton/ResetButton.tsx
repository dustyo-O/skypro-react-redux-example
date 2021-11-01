import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { cn } from '@bem-react/classname';
import { counterReset } from '../../store/actions';

const cnResetButton = cn('ResetButton');

export const ResetButton: FC = () => {
  const dispatch = useDispatch();

  const resetClickHandler = useCallback(() => {
    dispatch(counterReset());
  }, [dispatch]);

  return (
    <button className={cnResetButton()} onClick={resetClickHandler}>
      Обнулить
    </button>
  );
}
