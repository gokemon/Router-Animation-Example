import { RouterAnimationPage } from './app.po';

describe('router-animation App', () => {
  let page: RouterAnimationPage;

  beforeEach(() => {
    page = new RouterAnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
