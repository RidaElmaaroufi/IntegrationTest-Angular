import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';// we inject this module to tell the service that the data obtained from the API His TYPE IS ANY(LIgne 16)
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({ //Injectable means that this service could inject other dependencies inside it (that means call another service)
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private route: Router) { }

  nom= "REDA";
  public getNom(){
    return this.nom;
  }
  getPost(): Observable<any>{
    return this.http.get('https://lab-demo.joona.fr/apiconf/api/v1/platforms/all',
    {headers: new HttpHeaders().set('Authorization', 'Api-Key k6DQZf68W4dbuf')});
  }
  
  // navigation(){
  //   this.route.navigate('');
  // }
}
