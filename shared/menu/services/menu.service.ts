import { Injectable, Inject } from '@angular/core';
import { MenuItem, MenuConfigService, MenuConfig } from './menu-config.service';

@Injectable()
export class MenuService {
  public items: MenuItem[];

  constructor(@Inject(MenuConfigService) private readonly config: MenuConfig) {
    this.items = config.items;
  }
}
