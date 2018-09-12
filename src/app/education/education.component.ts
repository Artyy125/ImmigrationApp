import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';

import { Personal, Education }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component({
  selector: 'mt-wizard-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
  title = 'Please tell us about yourself.';
  education: Education;
  form: any;
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.education = this.formDataService.getEducation();
    console.log('Personal feature loaded!');
}

save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
        
    this.formDataService.setEducation(this.education);
    return true;
}

goToNext(form: any) {
    if (this.save(form)) {
        // Navigate to the work page
        this.router.navigate(['/work']);
    }
}

}