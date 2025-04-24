import { type Page } from '@playwright/test';
import { BasePage } from '@pages';

export class GooglePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    get cookieDialog()                         { return this.page.getByRole('dialog').getByRole('button').nth(1); }
    get searchInput()                          { return this.page.locator('[name="q"]'); }
    searchResultLink(text: string)             { return this.page.getByRole('link', { name: new RegExp(text) }).first(); }

    async visit() {
        await this.page.goto('https://www.google.com', {  waitUntil: 'domcontentloaded' });
    }

    async closeCookieDialogIfVisible() {
        const isCookieDialogVisible = await this.cookieDialog.isVisible().catch(() => false);
        if (isCookieDialogVisible) {
            await this.cookieDialog.click();
        }
    }

    /**
     * Search for a query in Google
     * @param query The query to search for
     */
    async search(query: string) {
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * Open a search result link
     * @param text The text of the link to open
     */
    async openSearchResultLink(text: string) {
        await this.searchResultLink(text).click();
        await this.page.waitForLoadState('networkidle');
    }
}
