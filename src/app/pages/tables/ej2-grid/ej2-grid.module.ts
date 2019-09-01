import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { Ej2GridRoutingModule } from './ej2-grid-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, Ej2GridRoutingModule, GridModule, PagerModule],
})
export class Ej2GridModule {}
