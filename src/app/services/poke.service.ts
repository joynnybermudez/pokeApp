import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private baseUrl: string = "https://pokeapi.co/api/v2";

  constructor(private http: HttpClient){ }

  getList(page: number = 0){
    return this.http.get(`${this.baseUrl}/pokemon`,{
      params: {
        offset: page,
        limit: 10,
      },
    });
  }

  getpokeData(name: string){
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
   }
}
