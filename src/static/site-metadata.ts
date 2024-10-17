interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '永远年轻',
  siteUrl: 'https://run.jaychou.cf',
  logo: 'https://avatars.githubusercontent.com/u/26641387?v=4',
  description: '一双狂奔中的球鞋 一路强壮着我的肺',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://jaychou.cf',
    },
    {
      name: 'About',
      url: 'https://github.com/jaychoubaby',
    },
  ],
};

export default data;
