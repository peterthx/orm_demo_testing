import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  private readonly dashboardHeading: Locator;
  private readonly userDropdown: Locator;
  private readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.userDropdown = page.locator('.oxd-userdropdown-name');
    this.logoutLink = page.getByRole('menuitem', { name: 'Logout' });
  }

  public async verifyDashboardVisible(): Promise<void> {
    await expect(this.dashboardHeading).toBeVisible();
  }

  public async logout(): Promise<void> {
    await this.userDropdown.click();
    await this.logoutLink.click();
  }
}
