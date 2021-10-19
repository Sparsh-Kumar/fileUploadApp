import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home/create-user', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import ('./users/users.module').then ((m) => m.UsersModule )},
  { path: '**', redirectTo: 'home/create-user', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
