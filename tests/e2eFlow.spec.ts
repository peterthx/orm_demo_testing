import { userAdmin } from '../data/adminUser';
import { test } from '../pages/page.fixture';

test('should show login and logout successfully', async ({ loginPage, dashboardPage }) => {
  await loginPage.goto();
  await loginPage.verifyBannerVisible();

  await loginPage.login(userAdmin.username, userAdmin.password);
  await dashboardPage.verifyDashboardVisible();

  await dashboardPage.logout();
  await loginPage.verifyBannerVisible();
});