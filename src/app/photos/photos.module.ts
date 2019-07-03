import { NgModule } from "@angular/core";
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    declarations: [],
    exports: [PhotoComponent],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
export class PhotosModule{}