import { Component, OnInit } from '@angular/core';

import { photos } from '../../shared/assets/json/art.json';
import { Photo } from '../../shared/assets/json/art.type';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { BlockingProxy } from 'blocking-proxy';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('artDisplay', [
      state('true', style({
        transform: 'scale(1.02)'
      })),
      state('false', style({
        transform: 'scale(1)'
      })),
      transition('true <=> false', [
        animate('0.2s')
      ])
    ]),
    trigger('captionDisplay', [
      state('true', style({
        opacity: 1 
      })),
      state('false', style({
        opacity: 0
      })),
      transition('true <=> false', [
        animate('0.5s')
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {

  private artDisplay: boolean = true;
  private captionDisplay: boolean = false;
  private photos: Array<Photo> = photos;
  private activeArts: Array<boolean> = new Array(photos.length);

  constructor(
  ) { }

  ngOnInit() {
    this.activeArts.fill(false);
  }

  toggleArt(photo: number) {
    this.activeArts[photo] = !this.activeArts[photo];
  }

}
