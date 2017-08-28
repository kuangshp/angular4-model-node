import { Ng17Page } from './app.po';

describe('ng17 App', function() {
  let page: Ng17Page;

  beforeEach(() => {
    page = new Ng17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
