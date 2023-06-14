import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskPipe } from './mask.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [MaskPipe],
  exports: [MaskPipe],
})
export class SharedModule {}
