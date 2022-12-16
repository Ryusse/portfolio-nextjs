import { Github, Linkedin } from '@emotion-icons/boxicons-logos';
import { Email } from '@emotion-icons/material-rounded';
import { Location } from '@emotion-icons/octicons';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Image from 'next/image';

export const StyledProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

export const StyledLocationIcon = styled(Location)`
  width: 14px;
  height: 14px;
  color: ${theme.colors.gray[300]};
`;

export const StyledEmail = styled(Email)`
  width: 1.5rem;
  color: ${theme.colors.gray[300]};
`;

export const StyledGithub = styled(Github)`
  width: 1.5rem;
  color: ${theme.colors.gray[300]};
`;

export const StyledLinkedin = styled(Linkedin)`
  width: 1.5rem;
  color: ${theme.colors.gray[300]};
`;
