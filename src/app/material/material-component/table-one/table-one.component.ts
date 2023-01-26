import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-material-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.css']
})
export class TableOneComponent implements OnInit, OnChanges {

  @Input() tableData: any = [];

  dataSource: any[] = [];

  displayedColumnObj = [
    {
      id: 4,
      name: 'Button',
      key: 'button'
    },
    {
      id: 1,
      name: 'Sr No.',
      key: 'srNo'
    },
    {
      id: 2,
      name: 'Task Name',
      key: 'taskName'
    },
    {
      id: 3,
      name: 'Date',
      key: 'date'
    }
  ];

  displayedColumns = [];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.displayedColumnObj.map(c => c.key);
  }

  ngOnChanges(): void {
    if (this.tableData.length === 0) return;

    this.updateTableData(this.tableData);
  }

  updateTableData(data: any): void {
    this.dataSource = data;
  }

}
