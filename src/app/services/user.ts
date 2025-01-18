import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';  // Example API URL

  constructor(private http: HttpClient) { }

  // Method to fetch users from the API
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  // Fetch user details by userId (GET request)
  getUserDetails(userId: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/${userId}`);
  }

  getUserPosts(userId:number){
    return this.http.get<any>(this.apiUrl + `/${userId}/posts`);
  }
}
