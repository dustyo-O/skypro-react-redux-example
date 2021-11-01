import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { ResetButton } from '../ResetButton/ResetButton';

import './Footer.css';

const cnFooter = cn('Footer');

export const Footer: FC = () => {
  return (
    <div className={cnFooter()}>
      <ResetButton/>
    </div>
  );
}
