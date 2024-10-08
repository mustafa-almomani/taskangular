import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient)  { }
  staticdata = "https://localhost:7030/api";
  url = `${this.staticdata}/services`;
 

  getServices(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getsubservicesbyservicid(id :any): Observable<any>
  {
    return this.http.get<any>(`${this.staticdata}/supcervices/getsupservicesbyid/${id}`)
  }


  getsubscription(): Observable<any> {
    return this.http.get<any>(`${this.staticdata}/subscription`)
  }
  addusersubscription(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticdata}/usersubscription`, data)

  }


  getproductbyid(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticdata}/supcervices/getproductbyid/${id}`)
  }


}
