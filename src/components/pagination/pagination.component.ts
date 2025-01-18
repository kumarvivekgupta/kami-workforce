import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

 
  @Input() totalPages=1;
  @Input() currentPage=1;
  @Output() pageChange=new EventEmitter<string>(); 


  prev(){
    this.pageChange.emit('prev');
  }

  next(){
    this.pageChange.emit('next');

  }



}
