import { AngularSoresuPage } from './app.po';

describe('angular-soresu App', () => {
  let page: AngularSoresuPage;

  beforeEach(() => {
    page = new AngularSoresuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
