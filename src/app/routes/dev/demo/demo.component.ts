import { Component } from '@angular/core';
import { DrawerHelper } from '@delon/theme';
import { DemoDrawerComponent } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="open()">Open</button>
    <button nz-button (click)="static()">Static</button>
  `,
})
export class DemoComponent {
  constructor(private modalHelper: DrawerHelper, private msg: NzMessageService) {}

  open(): void {
    this.modalHelper.create('View', DemoDrawerComponent, { record: { a: 1, b: '2', c: new Date() } }).subscribe(res => {
      this.msg.info(res);
    });
  }

  static(): void {
    this.modalHelper.static('View', DemoDrawerComponent, { record: { a: 1, b: '2', c: new Date() } }).subscribe(res => {
      this.msg.info(res);
    });
  }
}
