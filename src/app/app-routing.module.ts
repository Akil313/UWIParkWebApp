import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {TestingPageComponent} from './testing-page/testing-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: {title: 'Home Page Component'}
  },
  {
    path: 'testing',
    component: TestingPageComponent,
    data: {title: 'Testing Page Component'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
