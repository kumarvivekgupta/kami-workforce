
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from 'src/components/pagination/pagination.component';
import { AlbumService } from 'src/app/services/album';
import { SingleAlbumComponent } from 'src/components/album/album.component';

@Component({
    templateUrl: 'albums.component.html',
    styleUrls: ['albums.component.scss'],
    imports: [CommonModule, FormsModule, PaginationComponent, SingleAlbumComponent],
    providers: [AlbumService]
})
export class AlbumsComponent implements OnInit {

    albumsWithUsers: any[] = [];
    filteredAlbumWithUsers: any[] = [];
    viewedResults:any[]=[];
    inputValue = '';
    selectedOption = '';
    dropdownOptions = ['High-Low', 'Low-High'];
    currentPage = 1;
    totalPages = 1;
    limitPage = 10;
    isLoading=true;
    constructor(private albumService: AlbumService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.getPosts();

    }

    getPosts() {

        this.albumService.getAlbums().subscribe((res) => {
            this.albumsWithUsers = res;
            this.filteredAlbumWithUsers = res;
            this.viewedResults=res.slice(0,10);
            this.calculateCurrentAndTotalPage();
            this.isLoading=false;
        })


    }
    updateSearch(event: any) {
        this.updateRouteWithSearch(event.target.value.trim());
        this.filterResults();
    }

    updateRouteWithSearch(value: string): void {

        if (value) {
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: { search: value },
                queryParamsHandling: 'merge', // Ensures other query params aren't removed
            });

        } else {
            // If inputValue is empty, remove the search query parameter
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: { search: null }, // Setting search to null will remove it
                queryParamsHandling: 'merge', // Ensures other query params aren't removed
            });
        }
    }
    filterResults() {
        this.filteredAlbumWithUsers = [];
        this.albumsWithUsers.forEach((item) => {

            if (item.title.includes(this.inputValue.trim())) {
                this.filteredAlbumWithUsers.push(item);
            }
        });
        
        this.calculateCurrentAndTotalPage('filtered');
    }

    calculateCurrentAndTotalPage(state?: string) {
        if (state === 'filtered') {
            this.currentPage = 1;
            this.viewedResults=this.filteredAlbumWithUsers.length>0?this.filteredAlbumWithUsers.slice(0,10):[];
            this.totalPages = this.filteredAlbumWithUsers.length % 10 === 0 ? (this.filteredAlbumWithUsers.length / 10) : (this.filteredAlbumWithUsers.length / 10) + 1;
        }else if(state==='prev'){
            this.currentPage--;
             this.viewedResults=this.filteredAlbumWithUsers.length>0?this.filteredAlbumWithUsers.slice((this.currentPage-1)*10,this.currentPage*10):[];
        }else if(state==='next') {
            this.currentPage++;
            this.viewedResults=this.filteredAlbumWithUsers.length>0?this.filteredAlbumWithUsers.slice((this.currentPage-1)*10,this.currentPage*10):[];
        }else{
            this.currentPage=1;
            this.totalPages = this.filteredAlbumWithUsers.length % 10 === 0 ? (this.filteredAlbumWithUsers.length /10) : (this.filteredAlbumWithUsers.length / 10) + 1;
        }
    }

    changePage(event: string) {
        this.calculateCurrentAndTotalPage(event);


    }

}
