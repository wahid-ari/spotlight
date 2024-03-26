export type PortfolioType = {
  name: string;
  category: string[];
  description: string;
  url: string;
  design: string;
  stack: string;
  github: string;
  images: string[];
}[];

export const portfolios = [
  {
    name: 'MyVacation',
    category: ['design', 'development'],
    description:
      'Enjoy the untouched beaches, mountains, lakes, and many more pleasing destinations as well as the magnificent city skylines throughout the country. And when you decide to see them all, a visit won’t be enough to embrace the wonders of Indonesia.',
    url: 'https://my-vacation.vercel.app',
    design: 'Figma',
    stack: 'HTML, CSS, Typescript, Tailwind, Shadcn/UI, NextJS, Supabase, Vercel',
    github: 'https://github.com/wahid-ari',
    images: [
      '/portfolio/myvacation/myvacation.png',
      '/portfolio/myvacation/myvacation1.png',
      '/portfolio/myvacation/myvacation2.png',
      '/portfolio/myvacation/myvacation3.png',
      '/portfolio/myvacation/myvacation4.png',
      '/portfolio/myvacation/myvacation5.png',
      '/portfolio/myvacation/myvacation6.png',
    ],
  },
  {
    name: 'MyBook',
    category: ['design', 'development'],
    description:
      "Find books you'll love, and keep track of the books you want to read. Be part of the largest community of book lovers on MyBook",
    url: 'https://my-bookk.vercel.app',
    design: 'Figma',
    stack: 'HTML, CSS, Typescript, Tailwind, NextJS, Supabase, Vercel',
    github: 'https://github.com/wahid-ari',
    images: [
      '/portfolio/mybook/mybook.png',
      '/portfolio/mybook/mybook1.png',
      '/portfolio/mybook/mybook2.png',
      '/portfolio/mybook/mybook3.png',
      '/portfolio/mybook/mybook4.png',
      '/portfolio/mybook/mybook5.png',
      '/portfolio/mybook/mybook6.png',
      '/portfolio/mybook/mybook7.png',
    ],
  },
  {
    name: 'MyMovie',
    category: ['design', 'development'],
    description:
      "With MyMovie, it's easy to find Information and statistics about movies, TV shows as well as actors, directors and other film industry professionals.",
    url: 'https://my-moviee.vercel.app',
    design: 'Figma',
    stack: 'HTML, CSS, Javascript, Tailwind, NextJS, Supabase, Vercel',
    github: 'https://github.com/wahid-ari',
    images: [
      '/portfolio/mymovie/mymovie.png',
      '/portfolio/mymovie/mymovie1.png',
      '/portfolio/mymovie/mymovie2.png',
      '/portfolio/mymovie/mymovie3.png',
      '/portfolio/mymovie/mymovie4.png',
    ],
  },
  {
    name: 'MyMusic',
    category: ['design', 'development'],
    description:
      "With MyMusic, it's easy to find the right music for every moment - on your phone, your computer, your tablet and more.",
    url: 'https://my-musicc.vercel.app/',
    design: 'Figma',
    stack: 'HTML, CSS, Typescript, Tailwind, NextJS, Supabase, Vercel',
    github: 'https://github.com/wahid-ari',
    images: [
      '/portfolio/mymusic/MyMusic.png',
      '/portfolio/mymusic/MyMusic1.png',
      '/portfolio/mymusic/MyMusic2.png',
      '/portfolio/mymusic/MyMusic3.png',
    ],
  },
  {
    name: 'MyVacation REST API',
    category: ['development'],
    description: 'MyVacation REST API Documentation. Using Next.JS as a frontend framework and Nextra Theme Docs',
    url: 'https://my-vacation-docs.vercel.app/',
    design: 'Figma',
    stack: 'HTML, CSS, Tailwind, NextJS, Nextra',
    github: 'https://github.com/wahid-ari',
    images: [
      '/portfolio/myvacationdocs/myvacationdocs.png',
      '/portfolio/myvacationdocs/myvacationdocs1.png',
      '/portfolio/myvacationdocs/myvacationdocs2.png',
      '/portfolio/myvacationdocs/myvacationdocs3.png',
    ],
  },
  {
    name: 'MyBook REST API',
    category: ['development'],
    description: 'MyBook REST API Documentation. Using Next.JS as a frontend framework and Nextra Theme Docs',
    url: 'https://my-book-docs.vercel.app/',
    design: 'Figma',
    stack: 'HTML, CSS, Tailwind, NextJS, Nextra',
    github: 'https://github.com/wahid-ari',
    images: [
      '/portfolio/mybookdocs/mybookdocs.png',
      '/portfolio/mybookdocs/mybookdocs1.png',
      '/portfolio/mybookdocs/mybookdocs2.png',
      '/portfolio/mybookdocs/mybookdocs3.png',
    ],
  },
  {
    name: 'MyMovie REST API',
    category: ['development'],
    description: 'MyMovie REST API Documentation. Using Next.JS as a frontend framework and Nextra Theme Docs',
    url: 'https://my-movie-docs.vercel.app/',
    design: 'Figma',
    stack: 'HTML, CSS, Tailwind, NextJS, Nextra',
    github: 'https://github.com/wahid-ari',
    images: [
      '/portfolio/mymoviedocs/mymoviedocs.png',
      '/portfolio/mymoviedocs/mymoviedocs1.png',
      '/portfolio/mymoviedocs/mymoviedocs2.png',
      '/portfolio/mymoviedocs/mymoviedocs3.png',
    ],
  },
  {
    name: 'MyMusic REST API',
    category: ['development'],
    description: 'MyMusic REST API Documentation. Using Next.JS as a frontend framework and Nextra Theme Docs',
    url: 'https://my-music-docs.vercel.app/',
    design: 'Figma',
    stack: 'HTML, CSS, Tailwind, NextJS, Nextra',
    github: 'https://github.com/wahid-ari',
    images: [
      '/portfolio/mymusicdocs/MyMusicDocs.png',
      '/portfolio/mymusicdocs/MyMusicDocs1.png',
      '/portfolio/mymusicdocs/MyMusicDocs2.png',
    ],
  },
];
