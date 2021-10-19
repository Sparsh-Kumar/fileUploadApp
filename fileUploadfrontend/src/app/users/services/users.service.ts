import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  uploadFile (name: string, imageFile: File) {
    
    let formData = new FormData ();
    formData.append ('name', name);
    formData.append ('avatar', imageFile);

    return this._http.post (`${environment.API}/create-user`, formData);
  }

  getUsers () {
    return this._http.get (`${environment.API}/get-users`);
  }

  deleteUser (id: string) {
    return this._http.delete (`${environment.API}/delete-user/${id}`);
  }
}
