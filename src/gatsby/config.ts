// TODO Update this

const siteConfig = {
  url: 'https://ifiokjr.com',
  pathPrefix: '/',
  title: 'Ifiok Jr.',
  subtitle: 'Coding, Tech and a whole host of topics I want to explore.',
  get copyright() {
    return `© ${new Date().getFullYear()} ${siteConfig.title}`;
  },
  postsPerPage: 4,
  googleAnalyticsId: 'UA-155179953-1',
  useKatex: false,
  disqusShortname: '',
  menu: [
    {
      label: 'Articles',
      path: '/',
    },
    {
      label: 'About me',
      path: '/pages/about',
    },
    {
      label: 'Contact me',
      path: '/pages/contacts',
    },
  ],
  author: {
    name: 'Ifiok Jr.',
    photo: '/me.jpg',
    bio: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
    contacts: {
      email: '',
      facebook: '#',
      telegram: '#',
      twitter: '#',
      github: '#',
      rss: '',
      vkontakte: '',
      linkedin: '#',
      instagram: '#',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
    },
  },
};

export default siteConfig;
