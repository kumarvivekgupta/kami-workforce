import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post';
import {  SinglePostComponent } from 'src/components';

@Component({
    selector: 'app-top-posts',
    templateUrl: './top-posts.component.html',
    styleUrls: ['./top-posts.component.scss'],
    imports: [SinglePostComponent, CommonModule],
    providers:[PostService]
})
export class TopPostsComponent implements OnInit {

  
  recentPostWithUsers:Post[]=[];
  limit=6;
  isLoading=true;

  constructor(private postService:PostService) { }

  

  ngOnInit(): void {
    this.getTopPosts();
  }


  getTopPosts(){
    this.postService.getPosts().subscribe((res)=>{
        this.recentPostWithUsers=res.slice(0,this.limit);
        this.isLoading=false;
    })

  }


}
