import { ApiService } from '@api';
import { User } from '@types';

export class UserApiService extends ApiService {


    async createUser(user: User) {
        return await this.post('/user', user);
    }

    async getUserByUsername(username: string): Promise<User> {
        return await this.get(`/user/${username}`);
    }
}
