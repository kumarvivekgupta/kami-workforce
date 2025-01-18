import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post';
import { UserService } from 'src/app/services/user';
import { SinglePostComponent } from 'src/components';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    imports: [CommonModule, SinglePostComponent],
    providers:[UserService, PostService]
})
export class UserDetailComponent implements OnInit {

  
  

  constructor(private userService:UserService, private postService:PostService, private route:ActivatedRoute) { }

  userId:string|null='';
  userDetails:User | undefined;
  savedPosts:Post[]=[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.userId = params.get('id');  // Get the 'id' parameter
        this.getUserDetails();
        this.getAllSavedPosts();
      });
    
  }


  getUserDetails(){
    if(this.userId)
    this.userService.getUserDetails(+this.userId).subscribe((res)=>{
        this.userDetails=res;
    })

  }

  getAllSavedPosts(){
    if(this.userId){
        this.userService.getUserPosts(+this.userId).subscribe((res)=>{
            this.savedPosts=res;
            console.log(this.savedPosts);
        })
    }
  }

  navigateUser(event:number){
  }


}
