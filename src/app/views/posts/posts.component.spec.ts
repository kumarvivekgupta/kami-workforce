// @ts-nocheck
import {  TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Observable, of as observableOf } from 'rxjs';


import { PostsComponent } from './posts.component';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post';

@Injectable()
class MockPostService {}

@Injectable()
class MockRouter {
  navigate() {};
}

@Directive({ selector: '[myCustom]' })
class MyCustomDirective {
  @Input() myCustom;
}

@Pipe({name: 'translate'})
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'phoneNumber'})
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'safeHtml'})
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

describe('PostsComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule,PostsComponent,TranslatePipe,PhoneNumberPipe, SafeHtmlPipe,
        MyCustomDirective ],
      declarations: [
         
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: PostService, useClass: MockPostService },
        { provide: Router, useClass: MockRouter },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {url: 'url', params: {}, queryParams: {}, data: {}},
            url: observableOf('url'),
            params: observableOf({}),
            queryParams: observableOf({}),
            fragment: observableOf('fragment'),
            data: observableOf({})
          }
        }
      ]
    }).overrideComponent(PostsComponent, {

      set: { providers: [{ provide: PostService, useClass: MockPostService }] }    
    }).compileComponents();
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #calculateCurrentAndTotalPage()', async () => {
    component.filteredRecentPostWithUsers = component.filteredRecentPostWithUsers || {};
    component.filteredRecentPostWithUsers = ['filteredRecentPostWithUsers'];
    component.calculateCurrentAndTotalPage({});

  });

  it('should run #changePage()', async () => {
    
    component.changePage({});
     expect(component.calculateCurrentAndTotalPage).toBeTruthy();
  });

  it('should run #userNavigate()', async () => {
    component.router = component.router || {};
    component.userNavigate({});
    expect(component).toBeTruthy();
  });

});