import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  private readonly hdrDashboard: Locator;
  private readonly ddlUsers: Locator;
  private readonly lnkLogout: Locator;

  constructor(page: Page) {
    super(page);
    this.hdrDashboard = page.getByRole('heading', { name: 'Dashboard' });
    this.ddlUsers = page.locator('.oxd-userdropdown-name');
    this.lnkLogout = page.getByRole('menuitem', { name: 'Logout' });
  }

  public async verifyDashboardVisible(): Promise<void> {
    await expect(this.hdrDashboard).toBeVisible();
  }

  public async logout(): Promise<void> {
    await this.ddlUsers.click();
    await this.lnkLogout.click();
  }
}
