import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent
  ]
})
export class NavigationModule { }
