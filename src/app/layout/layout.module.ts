import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingRoutingModule } from './layout-routing.module';
import { PageHeaderComponent } from './page-header/page-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent
  ]
})
export class LayoutModule { }
