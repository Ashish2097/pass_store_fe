import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private router: Router) {}

  handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.router.navigate(['/']);
      return;
    }
    alert(error.status + ' : ' + error.error);
  }
}
