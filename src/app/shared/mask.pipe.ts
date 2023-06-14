import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  transform(value: string) {
    let partToBeMasked = value?.slice(5, 14);
    return value?.replace(partToBeMasked, 'XXXX-XXXX');
  }
}
