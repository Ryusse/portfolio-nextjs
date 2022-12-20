import { StaticImageData } from 'next/image';

import { IBadge } from '@/interfaces/badge';

export interface IExperienceHeader {
  id: number;
  title: string;
  start: string;
  end: string;
}

export interface IExperienceContent {
  id: number;
  title: string;
  location: string;
  link: string;
  externalLink: string;
  description: string;
  logo: StaticImageData;
  techStack: IBadge[];
}

export interface IExperience {
  id: number;
  header: IExperienceHeader;
  content: IExperienceContent[];
}
