import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from '../photo-form/photo-form.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { PhotoFormModule } from '../photo-form/photo-form.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PhotoListComponent, PhotosComponent, LoadButtonComponent, FilterByDescriptionPipe],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoListModule { }
