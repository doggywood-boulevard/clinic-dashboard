export class Note{

    id: number;
    aid: number;
    pid: number;
    n_message: string;

    constructor(id :number, aid: number, pid :number, n_message :string) {
        this.id = id;
        this.aid = aid;
        this.pid = pid;
        this.n_message = n_message;
    }
}