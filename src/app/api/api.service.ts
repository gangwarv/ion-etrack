import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as env } from "../../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

const BASE_URL = env.baseUrl;

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  constructor(private httpClient: HttpClient) {}
  
  public getTemp(
    path: string
  ): Promise<any> {
    return this.httpClient
      .get(path, this.options)
      .toPromise();
  }

  public get(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.httpClient
      .get(BASE_URL + path, { params })
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.httpClient
      .delete(BASE_URL + path)
      .pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }
}
