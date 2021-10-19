import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UsersModule { }
