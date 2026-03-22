import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly txtUsername: Locator;
  private readonly txtPassword: Locator;
  private readonly btnLogin: Locator;
  private readonly comBanner: Locator;

  constructor(page: Page) {
    super(page);
    this.txtUsername = page.getByRole('textbox', { name: 'Username' });
    this.txtPassword = page.getByRole('textbox', { name: 'Password' });
    this.btnLogin = page.getByRole('button', { name: 'Login' });
    this.comBanner = page.getByRole('img', { name: 'company-branding' });
  }

  public async goto(): Promise<void> {
    await this.navigateTo('/web/index.php/auth/login');
  }

  public async login(username: string, password: string): Promise<void> {
    await this.txtUsername.fill(username);
    await this.txtPassword.fill(password);
    await this.btnLogin.click();
  }

  public async verifyBannerVisible(): Promise<void> {
    await expect(this.comBanner).toBeVisible();
  }
}
