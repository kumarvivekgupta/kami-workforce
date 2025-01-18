import { CommonModule } from '@angular/common';
import { Component, Input  } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
    selector: 'app-single-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss'],
    imports:[CommonModule]
})
export class SingleAlbumComponent {

 
  @Input() album!:Album;

  



}
