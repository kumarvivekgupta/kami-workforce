import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { UserService } from './user';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';  // Can be fetched by Env

  constructor(private http: HttpClient, private userService:UserService) {}

  // Method to fetch users from the API
  getAlbums(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl+'/albums', {}).pipe(
        
        switchMap(posts => {
          const userRequests = posts.map(post => this.userService.getUserDetails(post.userId));
         
          return forkJoin(userRequests).pipe(
            map(users => {
              
              return posts.map((post, index) => ({
                ...post,
                user: users[index] 
              }));
            })
          );
        })
      );
  }
}
