import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImagePickerComponent } from "./image-picker/image-picker.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [ImagePickerComponent],
  imports: [IonicModule, CommonModule],
  exports: [ImagePickerComponent]
})
export class SharedModule {}
