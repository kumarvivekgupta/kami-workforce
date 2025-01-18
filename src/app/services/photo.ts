import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';  // Example API URL

  constructor(private http: HttpClient) {}

  // Method to fetch users from the API
  getPhotos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
