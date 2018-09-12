import { Injectable }                        from '@angular/core';

import { FormData, Personal, Address,Education }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isEducationFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            whatsAppNumber:this.formData.whatsAppNumber,
            telegramId:this.formData.telegramId,
            phoneNumber:this.formData.phoneNumber,
            dateOfBirth:this.formData.dateOfBirth
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getEducation(): Education {
        // Return the Personal data
        var education: Education = {
            level: this.formData.level,
            field: this.formData.field,
            university: this.formData.university,
            graduateYear:this.formData.graduateYear,
            averageScore:this.formData.averageScore,
            hasIELTS:this.formData.hasIELTS,
            IELTSListening:this.formData.IELTSListening,
            IELTSSpeaking:this.formData.IELTSSpeaking,
            IELTSReading:this.formData.IELTSReading,
            IELTSWriting:this.formData.IELTSWriting,
        };
        return education;
    }

    setEducation(data: Education) {
        // Update the education data only when the education Form had been validated successfully
        this.isEducationFormValid =true;
        this.formData.level = data.level;
        this.formData.field = data.field;
        this.formData.university = data.university;
        this.formData.graduateYear = data.graduateYear;
        this.formData.averageScore = data.averageScore;
        this.formData.hasIELTS = data.hasIELTS;
        this.formData.IELTSListening = data.IELTSListening;
        this.formData.IELTSReading = data.IELTSReading;
        this.formData.IELTSSpeaking = data.IELTSSpeaking;
        this.formData.IELTSWriting = data.IELTSWriting;
        // Validate education Step in Workflow
        this.workflowService.validateStep(STEPS.education);
    }

    getWork() : string {
        // Return the work type
        return this.formData.work;
    }
    
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid && 
                this.isAddressFormValid;
    }
}