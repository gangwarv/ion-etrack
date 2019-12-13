import { Component, ViewEncapsulation } from "@angular/core";

import { PopoverController } from "@ionic/angular";

import { PopoverPage } from "../about-popover/about-popover";
import { MeetingService } from "./../../api/meeting/meeting.service";
import { Observable } from "rxjs";
import { Meeting } from "../../models/meeting.model";

@Component({
  selector: "page-about",
  templateUrl: "about.html",
  styleUrls: ["./about.scss"]
})
export class AboutPage {
  conferenceDate = "2047-05-17";
  meetings: Observable<Meeting[]>;
  constructor(
    public popoverCtrl: PopoverController,
    private meeting: MeetingService
  ) {
    this.meetings = meeting.get();
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
