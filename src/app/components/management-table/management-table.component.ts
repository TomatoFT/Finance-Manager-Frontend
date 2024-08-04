import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Budget } from 'src/app/interface/budget';
import { Expense } from 'src/app/interface/expense';
import { Field } from 'src/app/interface/fields';

@Component({
  selector: 'app-management-table',
  templateUrl: './management-table.component.html',
  styleUrls: ['./management-table.component.css']
})
export class ManagementTableComponent {
  @Input() title: string | undefined;
  @Input() data: any[] = []; // Initialize as an empty array
  @Input() fields: Field<Budget>[] | undefined; // Use a generic type for fields

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  handleDelete(id: number): void {
    this.onDelete.emit(id);
  }

}
