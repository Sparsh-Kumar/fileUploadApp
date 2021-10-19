import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public preview: string;
  public form: FormGroup;
  public previewAvailable: boolean = false;

  constructor(public fb: FormBuilder, public router: Router, public route: ActivatedRoute, public fileUploadService: UsersService) {
    this.preview = '';
    this.form = this.fb.group ({
      name: '',
      avatar: [null]
    })
  }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
    
    const file = event.target.files[0];
    
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar')?.updateValueAndValidity()

    const reader = new FileReader();
    
    reader.onload = () => {
      this.preview = reader.result as string;
      this.previewAvailable = true;
    }

    reader.readAsDataURL(file);

  }

  submitForm () {

    const $self = this;
    this.fileUploadService.uploadFile (this.form.value.name, this.form.value.avatar).subscribe ((response) => {
      Swal.fire (
        "Saved !",
        "Your data has been saved",
        "success"
      ).then (() => {
        $self.router.navigate (['../list-users'], { relativeTo: $self.route })
      })
    }, (error) => {
      Swal.fire (
        'Sorry !',
        'Cannot save your data',
        'error'
      )
    });
  }

}
