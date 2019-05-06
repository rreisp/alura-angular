import { PhotoService } from './photos/photo/photo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Object[] = [];

  constructor(photoService: PhotoService) {
    photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}
