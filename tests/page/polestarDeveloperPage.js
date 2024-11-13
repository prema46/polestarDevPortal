// pageObjects/PolestarPage.js
const { expect } = require('@playwright/test');

class PolestarDevPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to the Polestar Developer page
  async navigate() {
    await this.page.goto('https://www.polestar.com/se/developer/get-started/');
  }

  // Close the cookie popup if it appears
  async closeCookieButton() {
    const cookiePopupCloseButton = this.page.locator('text=Accept all');
    const isVisible = await cookiePopupCloseButton.isVisible();
    if (isVisible) {
      console.log('Cookie popup found, closing it...');
      await cookiePopupCloseButton.click();
      await this.page.waitForSelector('div#onetrust-banner-sdk', { state: 'hidden' });
    } else {
      console.log('No cookie popup found');
    }
  }

  // Click the logo and navigate to the expected page
  async clickLogo() {
    const logo = this.page.locator('//*[@id="mega-menu-:r0:"]/div[1]/div[1]/div/header/a');
    await this.page.waitForSelector('//*[@id="mega-menu-:r0:"]/div[1]/div[1]/div/header/a', { state: 'visible' });
    // Check if the button is enabled
    const isEnabled = await logo.isEnabled();
    console.log(`Button is enabled: ${isEnabled}`);
    if (!isEnabled) {
      throw new Error("Button is not enabled.");
    }
    // Clcik logo and verify the page 
    await logo.click();

  }

  // Check responsiveness by iterating over multiple viewports
  async checkResponsiveness() {
    const viewports = [
      { name: 'Desktop', viewport: { width: 1920, height: 1080 } },
      { name: 'Tablet', viewport: { width: 768, height: 1024 } },
      { name: 'Mobile', viewport: { width: 375, height: 667 } },
    ];

    for (const { name, viewport } of viewports) {
      await this.page.setViewportSize(viewport);
      console.log(`Testing viewport: ${viewport.width}x${viewport.height}`);
      
      // Take a screenshot
      const screenshotPath = `test/__screenshots__/screenshot-${name}.png`;
      await this.page.screenshot({ path: screenshotPath, fullPage: true });
      
      // Validate screenshot
      await expect(this.page).toHaveScreenshot({
        path: screenshotPath,
        fullPage: true,
        threshold: 0.2 // Tolerance for slight rendering differences
      });
      console.log(`Viewport ${name} test completed.`);
    }
  }

  // Add a screenshot method
  async screenshot() {
    await this.page.screenshot({ path: 'screenshotsdd.png' });
  }

  // Wait for the page to load (timeout-based)
  async waitforPageloads() {
    await this.page.waitForTimeout(20000); // Consider using 'waitForLoadState' instead for a more reliable approach
  }

}

module.exports = { PolestarDevPage };
