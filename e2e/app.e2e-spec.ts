import { Ang2TutsPage } from './app.po';

describe('ang2-tuts App', function() {
  let page: Ang2TutsPage;

  beforeEach(() => {
    page = new Ang2TutsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
