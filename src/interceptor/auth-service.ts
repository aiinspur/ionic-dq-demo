import { Injectable } from '@angular/core';


@Injectable()
export class AuthService{


    getToken(){
        return "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbk5hbWUiOiIxMzkxMTYyODUzOCIsInVzZXJJZCI6MjQwLCJ0ZW5hbnRJZCI6MTIsImV4cCI6MTUyNjgyNjE0N30.hrRR098slEFZzkh1drdlrQ7yMhNJzIp-N41J0ZICFQ8";
    }

}