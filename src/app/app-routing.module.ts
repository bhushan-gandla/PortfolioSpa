import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioLandingPageComponent } from './portfolio-landing-page/portfolio-landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: 'portfolio-landing-page', component: PortfolioLandingPageComponent, data: { title: 'Portfolio Landing Page' } },
  { path: 'passwordTrue', component: HomePageComponent, data: { title: 'Bhushan Gandla' } },
  { path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
