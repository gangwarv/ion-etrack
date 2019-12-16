import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: "root"
})
export class NativeHttpService {
  constructor(private httpClient: HTTP) {}

  public get(url): Observable<any>{
    let promise = this.httpClient
      .get(environment.baseUrl + url, {},{})
      .then(res=>JSON.parse(res.data))
      .catch(err=>err.error);

      return from(promise);
  }
}
