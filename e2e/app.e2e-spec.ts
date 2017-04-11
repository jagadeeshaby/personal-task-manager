import { PersonalTaskManagerPage } from './app.po';

describe('personal-task-manager App', function() {
  let page: PersonalTaskManagerPage;

  beforeEach(() => {
    page = new PersonalTaskManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
