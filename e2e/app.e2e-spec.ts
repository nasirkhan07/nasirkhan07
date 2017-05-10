import { WeatherDemoPage } from './app.po';

describe('weather-demo App', function() {
  let page: WeatherDemoPage;

  beforeEach(() => {
    page = new WeatherDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
