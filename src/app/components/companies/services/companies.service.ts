import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICompany} from "../components/company";
import {Observable, publishReplay, refCount, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private cache?: Observable<ICompany[]>;
  public customCompany?: Observable<ICompany>;

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<ICompany[]> {
    if (!this.cache) {
      this.cache = this.addCompanies();
    }
    return this.cache;
  }

  addCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>('https://random-data-api.com/api/company/random_company?size=15').pipe(
      publishReplay(1),
      refCount()
    );
  }

  getCompanyById(id: number): Observable<ICompany> {
    return this.cache!.pipe(
      map((companies) => companies.find((company) => company.id == id)!)
    )
  }

  createCompany(form: {name: string, industry: string, inRussia: boolean}): void {
    this.customCompany = this.http.get<ICompany>('https://random-data-api.com/api/company/random_company').pipe(
      map((company) => {
      company.business_name = form.name;
      company.industry = form.industry;
      company.inRussia = form.inRussia;
      return company;
      })
    );
  }
}
