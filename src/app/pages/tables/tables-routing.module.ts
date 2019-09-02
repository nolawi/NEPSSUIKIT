import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { Ej2GridComponent } from './ej2-grid/ej2-grid.component';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: 'smart-table',
        component: SmartTableComponent,
      },
      {
        path: 'tree-grid',
        component: TreeGridComponent,
      },
      {
        path: 'ej2-grid',
        component: Ej2GridComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}

export const routedComponents = [TablesComponent, SmartTableComponent, TreeGridComponent, Ej2GridComponent];
