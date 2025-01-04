import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuardGuard } from './shared/guard/auth-guard.guard';
import { AddBookComponent } from './add-book/add-book.component';
import { ChartsComponent } from './charts/charts.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [
  {path:'login',component:LoginPageComponent , },
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,
     canActivate:[authGuardGuard],},
  {path:'chart',component:ChartsComponent },
  {path:'addbook',component:AddBookComponent },
  {path:'deletebook',component:DeleteBookComponent },
  {path:'viewbook',component:ViewBookComponent },
  {path:'not-found', component:PageNotfoundComponent},
  {path:'**', redirectTo:'/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
