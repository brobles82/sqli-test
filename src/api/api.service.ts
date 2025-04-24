// base.api.ts

import { request } from 'playwright';

export class ApiService {

    readonly baseUrl = 'https://petstore.swagger.io/v2';

    async get(path: string) {
        const requestContext = await request.newContext();
        try {
            const response = await requestContext.get(`${this.baseUrl}${path}`);
            if (!response.ok()) {
                throw new Error(`Error: ${response.statusText()}`);
            }
            return await response.json();
        } catch (error) {
            throw error;
        } finally {
            await requestContext.dispose();
        }
    }


    async post(path: string, data: object) {
        const requestContext = await request.newContext();
        try {
            const response = await requestContext.post(`${this.baseUrl}${path}`, {
                data: data,
            });
            if (!response.ok()) {
                throw new Error(`Error: ${response.statusText()}`);
            }
            return await response.json();
        } catch (error) {
            throw error;
        } finally {
            await requestContext.dispose();
        }
    }
}
