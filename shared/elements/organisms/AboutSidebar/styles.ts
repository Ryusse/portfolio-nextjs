import { Github, Linkedin } from '@emotion-icons/boxicons-logos';
import { Email } from '@emotion-icons/material-rounded';
import { Location } from '@emotion-icons/octicons';
import styled from '@emotion/styled';
import theme from '@styles/theme';

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
