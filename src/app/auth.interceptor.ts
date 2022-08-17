import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Authorization = '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5';
    return next.handle(request.clone({  setHeaders: { Authorization: `Bearer ${Authorization}` } }));
  }
}
