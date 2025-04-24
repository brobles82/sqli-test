import type { PlaywrightTestConfig } from '@playwright/test';
import 'dotenv/config.js';
import { VIEWPORTS } from '@utils/env';
require('dotenv').config();

const config: PlaywrightTestConfig = {
    reportSlowTests: null,
    testDir: './tests/',
    testMatch: /.*\.e2e\.ts/,
    timeout: 120_000,
    expect: {
        timeout: 20_000,
    },
    reporter: [['list']],
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 1,
    workers: 1,
    use: {
        actionTimeout: 20_000,
        navigationTimeout: 60_000,
        headless: false,
        trace: 'off',
        screenshot: 'only-on-failure',
        launchOptions: {
            slowMo: 500,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-blink-features=AutomationControlled',
                '--disable-features=IsolateOrigins,site-per-process',
            ],
        },
        proxy: {
            server: process.env.PROXY_SERVER,
            username: process.env.PROXY_USERNAME,
            password: process.env.PROXY_PASSWORD
        },
    },
    projects: [
        {
            name: 'chrome',
            use: {
                browserName: 'chromium',
                channel: 'chrome',
                ignoreHTTPSErrors: true,
                viewport: VIEWPORTS.desktop,
                deviceScaleFactor: 1,
                hasTouch: false,
                javaScriptEnabled: true,
                permissions: ['geolocation'],
                bypassCSP: true,
                acceptDownloads: true,
            },
        },
    ],
};

export default config;
