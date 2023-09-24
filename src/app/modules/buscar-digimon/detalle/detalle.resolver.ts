import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { BuscarDigimonDetalleService } from './detalle.service';
import { catchError, throwError } from 'rxjs';

export const detalleResolver: ResolveFn<any> = (route, state) => {
    const id = route.paramMap.get('id');

    if (!id) return false;

    return inject(BuscarDigimonDetalleService)
        .getDigimon(+id)
        .pipe(
            catchError((error) => {
                // Log the error
                console.error(error.message);

                // Get the parent url and append the last possible page number to the parent url
                const url = state.url.split('/').slice(0, -1).join('/') + '/' + error.pagination.lastPage;

                // Navigate to there
                inject(Router).navigateByUrl(url);

                // Throw an error
                return throwError(error);
            })
        );
};
