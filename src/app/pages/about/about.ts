import { Component } from "@angular/core";

import { HttpService } from "../../api/http.service";
import { NativeHttpService } from "./../../api/native-http.service";

@Component({
  selector: "page-about",
  templateUrl: "about.html",
  styleUrls: ["./about.scss"]
})
export class AboutPage {
  url = "/api/cities?city=A&country=IN0"
  data: any;
  error: any;
  constructor(
    private http: HttpService,
    private nativeHttp: NativeHttpService
  ) {}

  call(){
    this.data = "Http...";
    this.error = null;
    this.http.get(this.url).toPromise()
    .then(res=>{
      this.data = res;
    })
    .catch(err=>{
      this.error = err;
      this.data = null;
    })
  }
  nativeCall(){
    this.data = "NativeHttp...";
    this.error = null;
    this.nativeHttp.get(this.url).toPromise()
    .then(res=>{
      this.data = res;
    })
    .catch(err=>{
      this.error = err;
      this.data = null;
    })
  }
}
