import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {

  displayUpdateMessage = false;
  updateDone = false;
  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe(evt => {
      this.displayUpdateMessage = true;

      setTimeout(() => {
        this.displayUpdateMessage = false;
      }, 60000);
    });
  }
}
