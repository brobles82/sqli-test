import { type Page } from '@playwright/test';
import { BasePage } from '@pages';

export class WikipediaPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    get paragraphs()    { return this.page.locator('p:has(a)').all(); }


    /**
     * Search for a pattern in a sentence with specific terms
     * @param searchTerms Array of terms to search in the sentences
     * @param regexPattern Regex pattern to extract the desired value
     * @returns Promise<string | null> The value found that matches the regex, or null if not found
     */
    async findPatternInSentenceWithTerms(
        searchTerms: string[],
        regexPattern: RegExp
    ): Promise<string | null> {
        const paragraphs = await this.paragraphs;

        for (const p of paragraphs) {
            const raw = (await p.textContent()) || '';
            const text = raw.replace(/\[\d+\]/g, '').trim();

            const sentences = text.split('. ');

            for (const sentence of sentences) {
                const allTermsFound = searchTerms.every(term =>
                    sentence.toLowerCase().includes(term.toLowerCase())
                );

                if (allTermsFound) {
                    const match = sentence.match(regexPattern);
                    if (match) {
                        return match[0];
                    }
                }
            }
        }
        return null;
    }
}
