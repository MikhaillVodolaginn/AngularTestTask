import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { CompanyDescriptionComponent } from './components/company-description/company-description.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

const routes: Routes = [
  {path: '',
    children: [
      {path: 'list', component: ListCompaniesComponent},
      {path: 'description/:id', component: CompanyDescriptionComponent},
      {path: 'description', redirectTo: 'list', pathMatch: 'full'},
      {path: 'add', component: AddCompanyComponent},
      {path: '', redirectTo: 'list', pathMatch: "full"}
    ]
  }
]

@NgModule({
  declarations: [
    ListCompaniesComponent,
    CompanyDescriptionComponent,
    AddCompanyComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    InfiniteScrollModule
  ],
  exports: [RouterModule]
})
export class CompaniesModule { }
