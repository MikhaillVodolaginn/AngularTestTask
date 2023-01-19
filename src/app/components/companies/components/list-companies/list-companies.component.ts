import {Component, OnInit} from '@angular/core';
import {ICompany} from "../company";
import {CompaniesService} from "../../services/companies.service";

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit{
  companies!: ICompany[];

  constructor(private companiesService: CompaniesService) {
  }

  ngOnInit(): void {
    this.companiesService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
    this.companiesService.customCompany?.subscribe((company) => {
      this.companies.unshift(company);
    })
    this.companiesService.customCompany = undefined;
  }

  updateCompanies(): void {
    this.companiesService.addCompanies().subscribe((companies) => {
      this.companies.push(...companies);
    });
  }

  sortNames(): void {
    this.companies.sort(function (a, b) {
      if (a.business_name < b.business_name) return -1
      if (a.business_name > b.business_name) return 1
      return 0
    })
  }

  sortIndustries(): void {
    this.companies.sort(function (a, b) {
      if (a.industry < b.industry) return -1
      if (a.industry > b.industry) return 1
      return 0
    })
  }

  sortTypes(): void {
    this.companies.sort(function (a, b) {
      if (a.type < b.type) return -1
      if (a.type > b.type) return 1
      return 0
    })
  }
}
