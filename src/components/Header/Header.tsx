import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { Counter } from '../Counter/Counter';

import './Header.css';

const cnHeader = cn('Header');

export const Header: FC = () => {
  return (
    <div className={cnHeader()}>
      <Counter/>
    </div>
  );
}
