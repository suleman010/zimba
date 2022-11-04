import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
