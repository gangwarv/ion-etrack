import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  Plugins,
  Capacitor,
  CameraSource,
  CameraResultType,
  CameraPhoto
} from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { HTTP } from '@ionic-native/http/ngx'
import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl;

@Component({
  selector: "app-image-picker",
  templateUrl: "./image-picker.component.html",
  styleUrls: ["./image-picker.component.scss"]
})
export class ImagePickerComponent implements OnInit {
  @Output() imagePick = new EventEmitter<CameraPhoto>();
  @Output() upload = new EventEmitter<string[]>();
  selectedImage: any;
  selectedImages: string[] = [];
  status: string;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private nativeHttp: HTTP) {
    // this.selectedImages.push('s')
  }

  ngOnInit() {}

  onRemoveImage() {
    this.selectedImages.length = 0;
    this.upload.emit(this.selectedImages);
  }

  onPickImage() {
    if (!Capacitor.isPluginAvailable("Camera")) {
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      correctOrientation: true,
      height: 1280,
      width: 720,
      resultType: CameraResultType.Base64
    })
      .then(image => {
        this.status = "Captured. Sending via http;";
        this.http
          .post(baseUrl + "/api/files", {
            files: [image.base64String]
          })
          .pipe(
            map((response: any) => {
              if (response.R === "Y") {
                return response.data[0];
              }
              throw new Error(response.Message);
            }),
            catchError(err => {
              // console.log('err',err);
              this.status = "HttpError; "+ JSON.stringify(err);
              return of(err.message);
            })
          )
          .subscribe(res => {
            // this.upload.emit(res);
            this.status = "Done; " + res;
            this.selectedImages.push(res);
            // console.log(res);
          });
      })
      // .then((base64File: string) => {
      //   this.upload.emit(base64File|| 'dummy data');
      // })
      .catch(error => {
        console.log(error);
      });
  }
}
