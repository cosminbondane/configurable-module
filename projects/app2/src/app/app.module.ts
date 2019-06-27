import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuConfig } from 'shared/menu/services/menu-config.service';
import { MenuModule } from 'shared/menu/menu.module';

const config: MenuConfig = {
  items: [{
    link: 'link',
    name: 'Home 2'
  }, {
    link: 'link 2',
    name: 'Dashboard 2'
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
