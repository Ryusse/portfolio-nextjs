import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const GridWrapper = ({ children }: Props) => {
  return <div>{children}</div>;
};
