import { PetsApiService, UserApiService } from '@api';
import { test } from '@fixture';
import { USER_DATA } from '@data';
import { expect } from '@playwright/test';
import { SimplifiedPetArray } from '@types';
/**
 *  Test: Validate pet store api
 * Steps:
 * 1. Create user
 * 2. Verify user creation
 * 3. Get pets by status
 * 4. Count pet names
 */
test.describe('Validate pet store @api', () => {
    const petStoreApi = new PetsApiService();
    const userApi = new UserApiService();
    const userData = USER_DATA;

    test('Verify the user creation @user', async ({ }) => {
        await userApi.createUser(userData);

        await expect(async () => {
            const user = await userApi.getUserByUsername(userData.username);
            expect(user.username).toBe(userData.username);
        }).toPass({

            intervals: [1_000, 1_000, 1_000],
            timeout: 5_000
        });
    });

    test('Verify sold pets @pets', async ({ }) => {
        const pets = await petStoreApi.getPetsByStatus('sold');
        const simplifiedPets: SimplifiedPetArray = pets
            .filter(pet => pet.name !== undefined)
            .map(({ id, name }) => ({ id, name }));
        console.log(simplifiedPets);

        console.log(petStoreApi.countPetNames(simplifiedPets));
    });
});
