import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";
import { ApiResponse } from "../../models/api-response.model";
import { Meeting } from "../../models/meeting.model";
import { BehaviorSubject } from "rxjs";
import { HttpParams } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MeetingService {
  url = "/meetings";
  meetings: BehaviorSubject<Meeting[]>;

  constructor(private api: HttpService) {
    this.meetings = new BehaviorSubject<Meeting[]>([]);
    this.get();
  }

  get(): Observable<Meeting[]> {
    const params = new HttpParams()
      .set("compcode", "1")
      .set("userid", "AD0")
      .set("fromdate", "2019-12-10");

    return this.api.get(this.url, params).pipe(
      tap(d => {
        console.log(d);
      }),
      map((x: ApiResponse) => {
        this.meetings.next(x.data);
        return x.data as Meeting[];
      })
    );
  }
}
