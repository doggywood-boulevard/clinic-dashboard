export class VaccRecord{

int: number;
petId: number;
vName: string;
vTime: number;
vDate: string;

constructor(int: number, petId: number, vName: string, vTime: number, vDate: string){

    this.int = int;
    this.petId = petId;
    this.vName = vName;
    this.vTime = vTime;
    this.vDate = vDate;
}
}