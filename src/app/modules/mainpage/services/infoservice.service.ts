import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InfoserviceService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  public getPostInfo(){
    
    return this.http.get(`${this.apiUrl}/posts`);
    
  }

}
