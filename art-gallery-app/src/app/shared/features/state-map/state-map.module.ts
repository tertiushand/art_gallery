import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StateMapComponent } from './state-map.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    StateMapComponent
  ],
  exports: [
    StateMapComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class StateMapModule {}
