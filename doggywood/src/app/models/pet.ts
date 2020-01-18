export class Pet {
 
    id: number;
    cId: number;
    petName: string;
    birthDate: string;
    weight: number;
    type: number;
    breed: string;
    description: string

    constructor(
        id: number,
        cId: number,
        petName: string,
        birthDate: string,
        weight: number,
        type: number,
        breed: string,
        description: string,
    ) {

        this.id = id;
        this.cId = cId;
        this.petName = petName;
        this.birthDate = birthDate;
        this.weight = weight;
        this.type = type;
        this.breed = breed;
        this.description = description;
    }

}
