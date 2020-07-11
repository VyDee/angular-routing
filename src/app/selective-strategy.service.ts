import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SelectiveStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {

        // route.data['preload'] ==> this syntax means that
        // I call our data element preload in app-routing.module.ts
        if(route.data && route.data['preload']) {
            return load();
        }
        return of(null);
    }
}