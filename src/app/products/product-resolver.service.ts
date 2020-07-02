import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ProductResolved } from './product';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

// we want to implement the resolver to return a Product
// interface
export class ProductResolver implements Resolve<ProductResolved> {
    constructor(private productService: ProductService) { }

    //return a single observable product
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
        const id = route.paramMap.get('id');
        if(isNaN(+id)) {
            const message = `Product id was not a number: $(id)`;
            console.error(message);
            return of ({product: null, error: message});
        }
        return this.productService.getProduct(+id).pipe(
            map(product => ({product: product})),
            catchError(error => {
                const message = `Retrieval error: $(error)`;
                console.error(message);
                return of ({product: null, error: message});
            }),
        )
    }
}