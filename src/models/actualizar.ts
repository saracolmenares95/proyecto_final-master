export class ContactoActualizar {
    email: string;
    documento: string;
    random: number;
    afiliado: string;

    constructor(documento: string,
        random: number,
        afiliado: string,
        email: string) {
            this.email = email
            this.documento =documento
            this.random = random;
            this.afiliado = afiliado;
    }
}
