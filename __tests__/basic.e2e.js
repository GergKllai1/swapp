import wd from 'wd';
import config from '../e2e-config';

const port = 4723;
const driver = wd.promiseChainRemote('localhost', port);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe('Simple Appium Example', () => {
  beforeAll(async () => await driver.init(config));
//   afterAll(async () => await driver.quit());
  it('should find text', async () => {
    expect(await driver.hasElementByAccessibilityId('welcome')).toBe(true);
  });
});