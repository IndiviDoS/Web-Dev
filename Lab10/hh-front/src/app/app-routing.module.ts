import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';

const routes: Routes = [
  {
    path: 'companies',
    component: CompanyListComponent
  },
  {
    path: 'vacancies',
    component: VacancyListComponent
  },
  {path:'',
  component: HomePageComponent
},
  {path:'companies/:id',component: 
  CompanyDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
