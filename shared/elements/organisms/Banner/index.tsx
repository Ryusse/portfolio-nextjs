import { ReactNode } from 'react';

import { StyledBannerContainer, StyledBannerImage } from './styles';

import Banner1 from '/public/jpg/hero.jpg';

interface Props {
  children?: ReactNode;
}
export const Banner = ({ children }: Props) => {
  return (
    <StyledBannerContainer as="figure">
      <StyledBannerImage
        src={Banner1.src}
        alt="banner image"
        priority
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      ></StyledBannerImage>
      {children}
    </StyledBannerContainer>
  );
};
