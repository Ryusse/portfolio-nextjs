import WiestateLogo from '/public/jpg/wiestatelogo.jpg';
import WibookLogo from '/public/png/wibooklogo.png';

import { IExperience } from '@/interfaces/experience';

export const experience: IExperience[] = [
  {
    id: 1,
    header: {
      id: 1,
      title: 'Junior Frontend Developer at Winning',
      start: 'February 2022',
      end: 'now',
    },

    content: [
      {
        id: 1,
        title: 'Wiestate',
        location: 'Lima, Perú',
        link: 'wiestate.pe',
        externalLink: 'https://wiestate.pe/',
        description:
          'Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.',
        logo: WiestateLogo,
        techStack: [
          {
            id: 1,
            label: 'Nextjs',
          },
          {
            id: 2,
            label: 'Reactjs',
          },
        ],
      },
      {
        id: 2,
        title: 'Wibook',
        location: 'Lima, Perú',
        link: 'wibook.pe',
        externalLink: 'https://wibook.pe/',
        description:
          'Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.',
        logo: WibookLogo,
        techStack: [
          {
            id: 1,
            label: 'Angular',
          },
          {
            id: 2,
            label: 'Typescript',
          },
        ],
      },
    ],
  },
];
