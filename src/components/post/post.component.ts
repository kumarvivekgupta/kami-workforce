import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
    selector: 'app-single-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    imports:[CommonModule]
})
export class SinglePostComponent {

 
  @Input() post!: Post;
  @Input() recentPost=true;
  @Output() navigateUser=new EventEmitter<number>();


  navigateUserEvent(){
    this.navigateUser.emit(this.post.userId);
  }



}
