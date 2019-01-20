export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  resume?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'Hemanth Devarapalli',
  description: 'A blog on things and stuff 🤔',
  coverImage: 'img/noise.png',
  logo: 'img/hd92_logo.png',
  lang: 'en',
  siteUrl: 'https://blog.hd92.me',
  facebook: '',
  twitter: 'https://twitter.com/daemon92',
  github: 'https://www.github.com/itsmehemant123',
  linkedin: 'https://www.linkedin.com/in/hemanth-devarapalli',
  resume: 'pdf/resume-blog.pdf',
  showSubscribe: false,
  mailchimpAction: 'https://twitter.us19.list-manage.com/subscribe/post?u=<token>',
  mailchimpName: '<name>',
};

export default config;
