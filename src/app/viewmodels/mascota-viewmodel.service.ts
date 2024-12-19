import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaResponse } from '../models/mascota-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotaViewmodelService {
  private apiUrl = "https://app.juankuga.com/wspatitas/mascotaperdida.php"

  constructor(private httpClient: HttpClient){

  }

  listarMascotas(): Observable<MascotaResponse[]>{
    return this.httpClient.get<MascotaResponse[]>(this.apiUrl);
  }

}
