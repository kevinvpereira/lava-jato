import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [
    TitleComponent
  ]
})
export class SharedModule { }
