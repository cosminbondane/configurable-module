import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuModule } from 'shared/menu/menu.module';
import { MenuConfig } from 'shared/menu/services/menu-config.service';

const config: MenuConfig = {
  items: [{
    link: 'link',
    name: 'Home'
  }, {
    link: 'link 2',
    name: 'Dashboard'
  }]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
