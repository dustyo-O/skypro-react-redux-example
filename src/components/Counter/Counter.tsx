import { FC, useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';

import { counterDecrement, counterIncrement } from '../../store/actions';
import { counterSelector } from '../../store/selectors';

const cnCounter = cn('Counter');

export const Counter: FC = () => {
  const counter = useSelector(counterSelector);
  const dispatch = useDispatch();
  const decreaseHandler = useCallback((e) => {
    e.preventDefault();

    dispatch(counterDecrement());
  }, [dispatch]);

  const increaseHandler = useCallback((e) => {
    e.preventDefault();

    dispatch(counterIncrement());
  }, [dispatch]);

  return (
    <div className={cnCounter()}>
      <button className={cnCounter('Minus')} onClick={decreaseHandler}>-</button>
      <input className={cnCounter('Value')} value={counter} readOnly/>
      <button className={cnCounter('Plus')} onClick={increaseHandler}>+</button>
    </div>
  );
}
