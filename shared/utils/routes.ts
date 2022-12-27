export const DEFAULT_PAGES = {
  home: '/',
  projects: 'projects',
  about: 'about',
};

export class CustomRoutesDefault {
  static home() {
    return `${DEFAULT_PAGES.home}`;
  }
  static projects() {
    return `/${DEFAULT_PAGES.projects}`;
  }
  static about() {
    return `/${DEFAULT_PAGES.about}`;
  }
}
