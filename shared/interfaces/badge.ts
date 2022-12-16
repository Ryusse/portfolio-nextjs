import { ReactNode } from 'react';

export interface IBadge {
  id: number;
  label?: string;
  color?: string;
  icon?: ReactNode;
}
