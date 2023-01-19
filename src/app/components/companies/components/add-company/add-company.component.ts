import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CompaniesService} from "../../services/companies.service";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit{
  companyForm: FormGroup = new FormGroup({})
  industries!: string[];

  constructor(private router: Router, private companiesService: CompaniesService) {
  }

  ngOnInit(): void {
    this.industries = [
      'лесоводство и лесозаготовки',
      'добыча угля',
      'производство мебели',
      'научные исследования и разработки',
      'деятельность общественных организаций'
    ]
    this.companyForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      industry: new FormControl(null, [Validators.required]),
      inRussia: new FormControl(false)
    })
  }

  submit() {
    this.companiesService.createCompany(this.companyForm.value);
    this.router.navigate(['companies']);
  }
}
