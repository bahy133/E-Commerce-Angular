import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() data!: string[];
  @Output() SelectedValue = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  changeCat(event: any) {
    this.SelectedValue.emit(event);
  }
}
