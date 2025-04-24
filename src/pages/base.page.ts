import { type Page } from '@playwright/test';
import * as path from 'path';


export class BasePage {
    page: Page;


    constructor(page: Page) {
        this.page = page;
    }

    async takeScreenshot(name: string) {
        const screenshotsDir = path.join(process.cwd(), 'screenshots');

        await this.page.screenshot({
            path: path.join(screenshotsDir, `${name}.png`),
            fullPage: true,
            timeout: 60000
        });
        console.log(`Screenshot ${name} saved in:`, path.join(screenshotsDir, `${name}.png`));
    }
}
