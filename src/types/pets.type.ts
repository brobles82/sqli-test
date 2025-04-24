interface Category {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

interface Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: 'available' | 'pending' | 'sold';
}

interface SimplifiedPet {
  id: number;
  name: string;
}

type PetArray = Pet[];
type SimplifiedPetArray = SimplifiedPet[];

export { Pet, Category, Tag, PetArray, SimplifiedPet, SimplifiedPetArray };
