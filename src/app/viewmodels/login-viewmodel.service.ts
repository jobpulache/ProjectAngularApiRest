import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginViewmodelService {
  private apiUrl = "https://app.juankuga.com/wspatitas/login.php"
  private loginStateSubject = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) { }

  get loginState$(): Observable<boolean>{
    return this.loginStateSubject.asObservable()
  }

  login(usuario: string, password: string):Observable<LoginResponse>{
    const payload = {usuario, password}
    return this.http.post<LoginResponse>(this.apiUrl,
      payload)
  }

  setLoginState(isLoggedIn: boolean){
    this.loginStateSubject.next(isLoggedIn)
  }

  logout(){
    sessionStorage.clear()
  }

  isLogin(): boolean{
    return !!sessionStorage.getItem("login")
  }

}
