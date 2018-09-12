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
    phoneNumber: number;
    dateOfBirth: Date;
    level: string = '';
    field: string = '';
    university: string = '';
    graduateYear: string = '';
    averageScore:number;
    hasIELTS: boolean = false;
    IELTSReading: number;
    IELTSSpeaking: number;
    IELTSListening: number;
    IELTSWriting:number;


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
    phoneNumber: number;
    dateOfBirth: Date;
    email: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}

export class Education {
    level: string = '';
    field: string = '';
    university: string = '';
    graduateYear: string = '';
    averageScore:number;
    hasIELTS: boolean = false;
    IELTSReading: number;
    IELTSSpeaking: number;
    IELTSListening: number;
    IELTSWriting:number;
}