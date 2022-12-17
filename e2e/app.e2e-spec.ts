import { CinephPage } from './app.po';

describe('cineph App', function() {
  let page: CinephPage;

  beforeEach(() => {
    page = new CinephPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
