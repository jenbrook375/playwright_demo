import type {Locator, Page} from 'playwright';
import { user } from '../e2e/testData';

export class HomePage {
    readonly page: Page;
    readonly userField: Locator;
    readonly passwordField: Locator;
    readonly submitBtn: Locator;

    constructor (page:Page) {
        this.page = page;
        this.userField = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.submitBtn = page.locator('[data-test="login-button"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(page) {
        await this.userField.fill(user.userName);
        
        await this.passwordField.fill(user.password);
        
        await this.page.click('[data-test="login-button"]');

    }

}

