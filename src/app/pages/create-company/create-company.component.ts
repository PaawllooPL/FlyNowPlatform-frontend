import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputTextComponent } from "../../components/form-input-text/form-input-text.component";
import { FormInputNumberComponent } from '../../components/form-input-number/form-input-number.component';
import { ListSubmitButtonComponent } from '../../components/list-submit-button/list-submit-button.component';
import { CompanyService } from '../../services/company/company.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-company',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormInputTextComponent,
    FormInputNumberComponent,
    ListSubmitButtonComponent,
],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css'
})
export class CreateCompanyComponent {

  createCompanyForm: FormGroup;
  constructor(private fb: FormBuilder, private companyService: CompanyService, private authService: AuthService, private router: Router) {
    this.createCompanyForm = this.fb.group({});
  }

  onCreateFormSubmit() {
    const form = new FormData();
    form.append('name', this.createCompanyForm.get('createCompanyName')?.value);
    form.append('TIN', this.createCompanyForm.get('createCompanyTin')?.value);
    form.append('address', this.createCompanyForm.get('createCompanyAddress')?.value);
    this.companyService.createCompany(form).subscribe({
      next: (response) => {
        this.authService.logout();
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error(error)
        this.router.navigate(['/error'], {
          queryParams: {message: 'Error while creating company.'}
        });
      },
    })
  }
}
