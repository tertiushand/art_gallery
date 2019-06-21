import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { MenuConfig } from "./menu.config";
import { States } from '../../variables/states.variable';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MenuConfig,
    States
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule { }
