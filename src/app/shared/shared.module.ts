import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImagePickerComponent } from "./image-picker/image-picker.component";
import { IonicModule } from "@ionic/angular";
import { DataTableComponent } from './datatable/datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [ImagePickerComponent, DataTableComponent],
  imports: [IonicModule, CommonModule, NgxDatatableModule],
  exports: [ImagePickerComponent, NgxDatatableModule , DataTableComponent]
})
export class SharedModule {}
