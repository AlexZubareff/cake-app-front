import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../models/product';

@Pipe({
  name: 'filterProduct',
  standalone: true
})
export class FilterProductPipe implements PipeTransform {

  transform(products: IProduct[], searchString: string): IProduct[] {
    return products.filter(product => product.title?.toLowerCase().includes(searchString.toLowerCase()));
  }

}
