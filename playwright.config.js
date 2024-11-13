const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true, 
  timeout: 60 * 1000,
  retries: 0,
  reporter: [['html', { outputFolder: 'reports' }], ['json', { outputFile: 'reports/test-results.json' }]],
  workers: 4, 
  use: {
    baseURL: 'https://www.polestar.com',
    headless:true,
  },
  snapshots: {
    storage: './test-results/screenshots',  // Custom path for snapshots
  },
  projects: [
    { name: 'chrome', use: { browserName: 'chromium' } },
  //  { name: 'firefox', use: { browserName: 'firefox' } },
  ],
});
