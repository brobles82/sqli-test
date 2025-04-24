import * as base from '@playwright/test';
import * as pageObjects from '@pages';

export type pages = {
    GooglePage: pageObjects.GooglePage;
    WikipediaPage: pageObjects.WikipediaPage;
};


export const test = base.test.extend<pages>({
    browser: async ({ playwright }, use, testInfo) => {
        const LocalBrowser = await playwright[
            testInfo.project.use.browserName
        ].launch();
        await use(LocalBrowser);
        await LocalBrowser.close();
    },
    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
    },
    GooglePage: async ({ page }, use) => {
        const GooglePagePO = new pageObjects.GooglePage(page);
        await use(GooglePagePO);
    },
    WikipediaPage: async ({ page }, use) => {
        const WikipediaPagePO = new pageObjects.WikipediaPage(page);
        await use(WikipediaPagePO);
    },
});
