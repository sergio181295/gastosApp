import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService {
    
    public url:string;
    // private _http:Http; AQUI NO FUNCIONA, SOLO EN EL CONSTRUCTOR

    constructor(private _http: Http){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return "prueba de servicios...";
    }

    getArticulos(){
        return this._http.get(this.url);
        // return this._http.get(this.url).pipe(map(res => res.json()))
    }
}