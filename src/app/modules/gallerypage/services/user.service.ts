import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  public getUserInfo(){
    
    return this.http.get(`${this.apiUrl}/users`);
    
  }
}
