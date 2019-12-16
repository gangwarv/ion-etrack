import { Component } from "@angular/core";

import { ApiService } from "./../../api/api.service";
import { NativeHttpService } from "./../../api/native-http.service";

@Component({
  selector: "page-about",
  templateUrl: "about.html",
  styleUrls: ["./about.scss"]
})
export class AboutPage {
  url = "http://192.168.2.11/etrack/api/values"
  data: any;
  error: any;
  constructor(
    private http: ApiService,
    private nativeHttp: NativeHttpService
  ) {}

  call(){
    this.data = "calling Http";
    this.error = null;
    this.http.getTemp(this.url)
    .then(res=>{
      this.data = res;
    })
    .catch(err=>{
      this.error = err;
      this.data = null;
    })
  }
  nativeCall(){
    this.data = "calling NativeHttp";
    this.error = null;
    this.nativeHttp.get(this.url)
    .then(res=>{
      this.data = res;
    })
    .catch(err=>{
      this.error = err;
      this.data = null;
    })
  }
}
