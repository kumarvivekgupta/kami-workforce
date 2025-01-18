import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.scss'],
    imports:[CommonModule]
})
export class PhotoComponent {
  @Input() photo!:Photo;
  @Input() list=false;

  constructor() { }

 

}
