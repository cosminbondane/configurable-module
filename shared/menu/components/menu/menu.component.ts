import { Component, Inject, OnInit } from '@angular/core';
import { MenuConfigService, MenuItem, MenuConfig } from 'shared/menu/services/menu-config.service';
import { MenuService } from 'shared/menu/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor(@Inject(MenuConfigService) private readonly config: MenuConfig) { }

  ngOnInit() {
    this.items = this.config.items;
  }
}
