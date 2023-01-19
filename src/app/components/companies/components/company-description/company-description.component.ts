import {Component, OnInit} from '@angular/core';
import {CompaniesService} from "../../services/companies.service";
import {ActivatedRoute} from "@angular/router";
import {ICompany} from "../company";
import {Observable} from "rxjs";

@Component({
  selector: 'app-company-description',
  templateUrl: './company-description.component.html',
  styleUrls: ['./company-description.component.css']
})
export class CompanyDescriptionComponent implements OnInit{
  id!: number;
  company?: Observable<ICompany>;

  constructor(private companiesService: CompaniesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.id = params?.['id']);
    this.company = this.companiesService.getCompanyById(this.id);
  }
}
