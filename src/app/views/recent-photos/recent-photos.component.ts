import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo';
import { PhotoComponent } from 'src/components';

@Component({
    selector: 'app-recent-photo',
    templateUrl: './recent-photos.component.html',
    styleUrls: ['./recent-photos.component.scss'],
    imports: [PhotoComponent, CommonModule],
    providers:[PhotoService]
})
export class RecentPhotosComponent implements OnInit {

  
  recentPhotos:Photo[]=[];
  limit=12;
  isLoading=true;

  constructor(private photoService:PhotoService) { }

  

  ngOnInit(): void {
    this.getRecentPhotos();
  }


  getRecentPhotos(){
    this.photoService.getPhotos().subscribe((res)=>{
        this.recentPhotos=res.slice(0,this.limit);
        this.isLoading=false;
    })

  }


}
