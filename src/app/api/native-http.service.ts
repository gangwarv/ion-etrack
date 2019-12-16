import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";

@Injectable({
  providedIn: "root"
})
export class NativeHttpService {
  constructor(private httpClient: HTTP) {}

  public get(url): Promise<any>{
    return this.httpClient
      .get(url, {},{})
      .then(res=>res.data)
      .catch(err=>err.error);
  }
}
