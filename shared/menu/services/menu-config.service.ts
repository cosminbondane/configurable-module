import { InjectionToken } from '@angular/core';

export class MenuItem {
  link: string;
  name: string;
}

export class MenuConfig {
  items: MenuItem[]
}

export const MenuConfigService = new InjectionToken<MenuConfig>('MenuConfig');
