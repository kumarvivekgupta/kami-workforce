import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private userService: UserService) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  allPosts: Post[] = [];

  setAllPosts(data: Post[]) {
    console.log('service save', data);
    this.allPosts = data;
  }

  getAllLoadedPosts() {
    return of(this.allPosts);
  }

  // Fetch posts (POST request)
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/posts', {}).pipe(
      // After we get the posts, we get user details for each post
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
