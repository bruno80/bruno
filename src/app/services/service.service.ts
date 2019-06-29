import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get("http://5d14083876f3f5001415f48f.mockapi.io/perfil/")
  }

  post(contato){
    return this.http.post("http://5d14083876f3f5001415f48f.mockapi.io/perfil/", contato)
  }

  delete(contato){
    return this.http.delete("http://5d14083876f3f5001415f48f.mockapi.io/perfil/", contato)
  }

  like(id, contato){
    return this.http.put("http://5d14083876f3f5001415f48f.mockapi.io/perfil/" + id, contato)
  }

}
