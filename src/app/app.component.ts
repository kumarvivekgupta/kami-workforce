import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: '<router-outlet />',
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'Angular Dashboard Kami';
  readonly #titleService = inject(Title);

 

  constructor() {
    this.#titleService.setTitle(this.title);
  }

  ngOnInit(): void {
  }
}
