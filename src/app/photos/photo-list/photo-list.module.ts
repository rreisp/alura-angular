import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from './../../shared/components/card/card.module';

@NgModule({
        declarations: [
                PhotoListComponent,
                PhotosComponent,
                LoadButtonComponent,
                FilterByDescription,
                SearchComponent
        ],
        imports: [
                CommonModule,
                PhotoModule,
                CardModule
        ]
})
export class PhotoListModule { }
