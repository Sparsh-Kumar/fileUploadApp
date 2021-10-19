import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public users: any [] = [];

  constructor(public fb: FormBuilder, public router: Router, public fileUploadService: UsersService) { }

  ngOnInit(): void {
    this.getData ();
  }

  getData () {

    const $self = this;
    this.fileUploadService.getUsers ().subscribe ((response: any) => {
      $self.users = response.users;
    }, (error) => {
      Swal.fire (
        'Error!',
        'Cannot get data about users',
        'error'
      )
    })
    
  }

  deleteUser (id: string) {

    const $self = this;
    Swal.fire (
      {
        title: 'Are you sure ?',
        text: 'You would not be able to revert this',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }
    ).then ((result) => {
      if (result.isConfirmed) {
        this.fileUploadService.deleteUser (id).subscribe ((response: any) => {

          Swal.fire (
            'Deleted !',
            'User successfully deleted',
            'success'
          ).then (() => {
            $self.getData ();
          })
    
        }, (error) => {
          Swal.fire (
            'Error !',
            'Cannot delete the user',
            'error'
          )
        })  
      }
    })
    
  }

}
