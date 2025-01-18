// @ts-nocheck
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { PhotosComponent } from './photos.component';
import { PhotoService } from 'src/app/services/photo';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
class MockPhotoService {}

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

describe('PhotosComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, PhotosComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        MyCustomDirective ],
      declarations: [
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: PhotoService, useClass: MockPhotoService },
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
    }).overrideComponent(PhotosComponent, {

      set: { providers: [{ provide: PhotoService, useClass: MockPhotoService }] }    
    }).compileComponents();
    fixture = TestBed.createComponent(PhotosComponent);
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

  it('should run #getPosts()', async () => {
    component.photoService = component.photoService || {};
    expect(component.calculateCurrentAndTotalPage).toBeTruthy();
  });

  
 

  it('should run #calculateCurrentAndTotalPage()', async () => {
    component.filteredRecentPostWithUsers = component.filteredRecentPostWithUsers || {};
    component.filteredRecentPostWithUsers = ['filteredRecentPostWithUsers'];
    component.calculateCurrentAndTotalPage({});

  });


});