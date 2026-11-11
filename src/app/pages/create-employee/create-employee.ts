import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.scss',
})
export class CreateEmployeeComponents {
  personalInfo = new FormGroup({
    employeeId: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    DOB: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    maritalStatus: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),
  });

  contactInfo = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    currAddress: new FormControl('', Validators.required),
    perAddress: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    pinCode: new FormControl('', Validators.required),
  });

  employmentInfo = new FormGroup({
    employeeId: new FormControl('', Validators.required),
    joiningDate: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    employmentType: new FormControl('', Validators.required),
    employeeStatus: new FormControl('', Validators.required),
  });

  bankInfo = new FormGroup({
    nameOnPassbook: new FormControl('', Validators.required),
    bankName: new FormControl('', Validators.required),
    accountNumber: new FormControl('', Validators.required),
    IFSC: new FormControl('', Validators.required),
    PAN: new FormControl('', Validators.required),
  });

  // Parent form
  employeeForm = new FormGroup({
    personalInfo: this.personalInfo,
    contactInfo: this.contactInfo,
    employmentInfo: this.employmentInfo,
    bankInfo: this.bankInfo,
  });

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      console.log('Form is invalid');
      return;
    }

    console.log('Employee Data:');
    console.log(this.employeeForm.value);
  }
}
