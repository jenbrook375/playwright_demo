import {test, expect, Locator, Page} from '@playwright/test';
import { user } from './testData';
import { HomePage } from '../pages/homepage';

test('User can login', async ({ page }) => {
    const homepage = new HomePage(page);

    await homepage.goto();
    await homepage.login(page);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})