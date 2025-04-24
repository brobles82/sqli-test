import { fakerEN_US as faker } from '@faker-js/faker';

export const USER_DATA = {
    id: faker.number.int({ min: 0, max: 10000 }),
    username: faker.internet.username(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    userStatus: 1
};
