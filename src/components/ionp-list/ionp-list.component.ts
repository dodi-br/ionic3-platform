import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { IonpList, IonpListItem, IonpListGroup } from './ionp-list';
import { AttrsDirective } from '../../directives/attrs.directive';
import { IonpListComponentTemplate } from './ionp-list.html';

@Component({
  selector: 'ionp-list',
  template: IonpListComponentTemplate,
  providers: []
})


export class IonpListComponent implements OnInit {

  selectedItem: IonpListItem;

  //huangqing: COMPONENT INTERACTION 组件通讯
  //https://www.angular.cn/docs/ts/latest/cookbook/component-communication.html
  //1.添加 @Input
  //2.在 app.module.ts 引入 IonpListComponent
  @Input()
  list: IonpList;
  @Output() onItemSelected = new EventEmitter<IonpListItem>();
  @Output() onInputTextChanged = new EventEmitter<IonpListItem>();
  groups: IonpListGroup[];
  items: IonpListItem[];
  params: IonpListItem;

  constructor() { }

  ngOnInit() {
    //this.selectedItem = this.navParams.get('item');
    //this.params = this.navParams.data.item;
    //this.getList();
  }

  //父组件监听子组件的事件:Parent listens for child event
  //https://www.angular.cn/docs/ts/latest/cookbook/component-communication.html#!#parent-to-child-on-changes
  itemSelected(item: IonpListItem) {
    this.onItemSelected.emit(item);
  }

  InputTextChanged(item: IonpListItem) {
    this.onItemSelected.emit(item);
  }

}

