import { test } from '@fixture';
import { expect } from '@playwright/test';

/**
 *  Test: Search first, automated and process in Wikipedia from google search
 * Steps:
 * 1. Open Google
 * 2. Search for "automation"
 * 3. Open Wikipedia link
 * 4. Search for "first", "automated" and "process"
 * 5. Validate the search results
 */
test.describe('Wikipedia search @wikipedia', () => {
    test('Verify the year of automation', async ({ GooglePage, WikipediaPage }) => {

        await GooglePage.visit();
        await GooglePage.closeCookieDialogIfVisible();
        await GooglePage.search('automation');
        await GooglePage.closeCookieDialogIfVisible();
        await GooglePage.openSearchResultLink('Automation Wikipedia');

        const year = await WikipediaPage.findPatternInSentenceWithTerms(
            ['first', 'automated', 'process'],
            /\b\d{4}\b/
        );
        expect(year).toBe('1785');

        await WikipediaPage.takeScreenshot('wikipedia-automation');
    });
});
