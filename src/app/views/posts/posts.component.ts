
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from 'src/app/services/post';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from 'src/components/pagination/pagination.component';
import { SinglePostComponent } from 'src/components/post/post.component';
import { Post } from 'src/app/models/post';

@Component({
    templateUrl: 'posts.component.html',
    styleUrls: ['posts.component.scss'],
    imports: [CommonModule, FormsModule, PaginationComponent, SinglePostComponent],
    providers: [PostService]
})
export class PostsComponent implements OnInit {

    recentPostWithUsers: Post[] = [];
    filteredRecentPostWithUsers: Post[] = [];
    viewedResults:Post[]=[];
    inputValue = '';
    selectedOption = '';
    dropdownOptions = ['High-Low', 'Low-High'];
    currentPage = 1;
    totalPages = 1;
    limitPage = 10;
    isLoading=true;
    constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.getPosts();

    }

    getPosts() {

        this.postService.getPosts().subscribe((res) => {
            this.recentPostWithUsers = res;
            this.filteredRecentPostWithUsers = res;
            this.viewedResults=res.slice(0,10);
            this.calculateCurrentAndTotalPage();
            this.isLoading=false;
        });
        


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
        this.filteredRecentPostWithUsers = [];
        this.recentPostWithUsers.forEach((item) => {

            if (item.title.includes(this.inputValue.trim())) {
                this.filteredRecentPostWithUsers.push(item);
            }
        });
        
        this.calculateCurrentAndTotalPage('filtered');
    }

    calculateCurrentAndTotalPage(state?: string) {
        if (state === 'filtered') {
            this.currentPage = 1;
            this.viewedResults=this.filteredRecentPostWithUsers.length>0?this.filteredRecentPostWithUsers.slice(0,10):[];
            this.totalPages = this.filteredRecentPostWithUsers.length % 10 === 0 ? (this.filteredRecentPostWithUsers.length / 10) : (this.filteredRecentPostWithUsers.length / 10) + 1;
        }else if(state==='prev'){
            this.currentPage--;
             this.viewedResults=this.filteredRecentPostWithUsers.length>0?this.filteredRecentPostWithUsers.slice((this.currentPage-1)*10,this.currentPage*10):[];
        }else if(state==='next') {
            this.currentPage++;
            this.viewedResults=this.filteredRecentPostWithUsers.length>0?this.filteredRecentPostWithUsers.slice((this.currentPage-1)*10,this.currentPage*10):[];
        }else{
            this.currentPage=1;
            this.totalPages = this.filteredRecentPostWithUsers.length % 10 === 0 ? (this.filteredRecentPostWithUsers.length /10) : (this.filteredRecentPostWithUsers.length / 10) + 1;
        }
    }

    changePage(event: string) {
        this.calculateCurrentAndTotalPage(event);


    }

    userNavigate(event:number){
        this.router.navigate(['/users', event]);
    }

}
