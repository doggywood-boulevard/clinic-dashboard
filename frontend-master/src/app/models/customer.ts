export class Customer {
    c_id: number;
    fname: string;
    lname: string;
    phone: string;
    email: string;
    pass: string;
    photo: string;

    constructor(
        c_id: number,
        fname: string,
        lname: string,
        phone: string,
        email: string,
        pass: string,
        photo: string
    ) {
        this.c_id = c_id;
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.email = email;
        this.pass = pass;
        this.photo = photo;
    }

}
