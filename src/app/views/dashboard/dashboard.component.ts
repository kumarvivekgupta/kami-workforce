import { CommonModule, DOCUMENT, NgStyle } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { RecentPhotosComponent } from '../recent-photos/recent-photos.component';
import { TopPostsComponent } from '../top-posts/top-posts.component';

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
    imports: [RecentPhotosComponent,TopPostsComponent, CommonModule
    ]
})
export class DashboardComponent implements OnInit {

  isLoading=false;

  
 
  ngOnInit(): void {
   
  }
}
