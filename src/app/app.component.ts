import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonHeaderComponent } from './common-header/common-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  activeMenu = false;
  navigate() {
    
  }
  menuSelected() {
    this.activeMenu = true
  }
}
