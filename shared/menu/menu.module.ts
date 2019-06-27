import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuConfig, MenuConfigService } from './services/menu-config.service';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {
  static forRoot(config: MenuConfig): ModuleWithProviders {
    return {
      ngModule: MenuModule,
      providers: [
        MenuService,
        { provide: MenuConfigService, useValue: config }
      ]
    };
  }
}
