import { NgModule } from "@angular/core";
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
    declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent],
    exports: [PhotoComponent],
    imports: [HttpClientModule]
})
export class PhotosModule{}