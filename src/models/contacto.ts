export class Contacto {
    _id?: string;
    email: string;
    password: string;
    name: string;
    lastname: string;
    date: string;
    number: string;

    constructor(email: string,
        password: string,
        name: string,
        lastname: string,
        date: string,
        number: string) {
        this.email = email
        this.password = password
        this.name = name
        this.lastname = lastname
        this.date = date
        this.number = number
    }
}
