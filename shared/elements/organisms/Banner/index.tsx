import { StyledBannerContainer, StyledBannerImage } from './styles';

import Banner1 from '/public/jpg/hero.jpg';

export const Banner = () => {
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
    </StyledBannerContainer>
  );
};
