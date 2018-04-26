import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor} from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
// import { AuthService } from "./auth-service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    // constructor(private authService: AuthService) {
    //     //console.log("token:%s",authService.getToken());
    // }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
            //headers: req.headers.set('token', this.authService.getToken())
        });
        //console.log("new headers", clonedRequest.headers.keys());
        // console.log("token:%s",this.authService.getToken());
        return next.handle(clonedRequest);
    }
}