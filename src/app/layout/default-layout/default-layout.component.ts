import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { navItems } from './_nav';
import { CommonModule } from '@angular/common';

function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule,
    RouterModule
  ]
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  isSidebarCollapsed = false;

  // Method to toggle the sidebar visibility
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  
}
