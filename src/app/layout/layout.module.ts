import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { LayoutDefaultComponent } from './global/default.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
import { HeaderComponent } from './global/header/header.component';
import { SidebarComponent } from './global/sidebar/sidebar.component';
import { HeaderSearchComponent } from './global/header/components/search.component';
import { HeaderTaskComponent } from './global/header/components/task.component';
import { HeaderIconComponent } from './global/header/components/icon.component';
import { HeaderFullScreenComponent } from './global/header/components/fullscreen.component';
import { HeaderStorageComponent } from './global/header/components/storage.component';
import { HeaderUserComponent } from './global/header/components/user.component';

const COMPONENTS = [LayoutDefaultComponent, LayoutFullScreenComponent, HeaderComponent, SidebarComponent];
const HEADERCOMPONENTS = [
  HeaderSearchComponent,
  HeaderTaskComponent,
  HeaderIconComponent,
  HeaderFullScreenComponent,
  HeaderStorageComponent,
  HeaderUserComponent,
];

// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [LayoutPassportComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
  exports: [...COMPONENTS, ...PASSPORT],
})
export class LayoutModule {}
