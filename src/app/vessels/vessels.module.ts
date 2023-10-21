import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VesselsComponent } from './components/vessels/vessels.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    VesselsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    
  ]
})
export class VesselsModule { }
