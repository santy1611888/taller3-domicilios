import { MiprimerProyectoPage } from './app.po';

describe('miprimer-proyecto App', function() {
  let page: MiprimerProyectoPage;

  beforeEach(() => {
    page = new MiprimerProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
