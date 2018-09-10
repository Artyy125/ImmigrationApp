export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    work: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    telegramId: string = '';
    whatsAppNumber: string = '';
    phoneNumber: Int32Array;
    dateOfBirth: Date;


    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}

export class Personal {
    firstName: string = '';
    lastName : string = '';
    telegramId: string = '';
    whatsAppNumber: string = '';
    phoneNumber: Int32Array;
    dateOfBirth: Date;
    email: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}