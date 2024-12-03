import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  createCompany(form: FormData) : Observable<string> {
    return this.http.post(environment.apiUrl.createCompanyUrl, form, {
      responseType: 'text',
    })
  }
}
