import { ApiService } from '@api';
import { PetArray, SimplifiedPetArray } from '@types';

export class PetsApiService extends ApiService {
    async getPetsByStatus(status: string) : Promise<PetArray> {
        return await this.get(`/pet/findByStatus?status=${status}`);
    }

    countPetNames(pets: SimplifiedPetArray) {
        return pets.reduce((acc, pet) => {
            acc[pet.name] = (acc[pet.name] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }
}
