import { ReactNode } from 'react';

import { StyledImage } from '@styles/utils/custom';

import { StyledBannerContainer } from './styles';

import Banner1 from '/public/jpg/hero.jpg';

interface Props {
  children?: ReactNode;
}
export const Banner = ({ children }: Props) => {
  return (
    <StyledBannerContainer as="figure">
      <StyledImage
        src={Banner1.src}
        alt="banner image"
        placeholder="blur"
        blurDataURL={Banner1.src}
        priority
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      {children}
    </StyledBannerContainer>
  );
};
