// src/app/record-form/record-form.component.ts

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecordService } from '../services/record.service';
import { Record } from '../models/record.model';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {
  record: Record = { name: '', description: '' };
  records: Record[] = [];
  editingRecordId: number | null = null;

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.loadRecords();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.editingRecordId !== null) {
        this.record.id = this.editingRecordId;
        this.recordService.updateRecord(this.record).subscribe({
          next: (response) => {
            console.log('Record updated successfully:', response);
            this.loadRecords();
            this.resetForm();
          },
          error: (error) => {
            console.error('Error updating record:', error);
            // Handle error
          }
        });
      } else {
        this.recordService.addRecord(this.record).subscribe({
          next: (response) => {
            console.log('Record added successfully:', response);
            this.loadRecords();
            this.resetForm();
          },
          error: (error) => {
            console.error('Error adding record:', error);
            // Handle error
          }
        });
      }
    }
  }

  loadRecords() {
    this.recordService.getRecords().subscribe({
      next: (data) => this.records = data,
      error: (error) => console.error('Error loading records:', error)
    });
  }

  editRecord(record: Record) {
    this.record = { ...record };
    this.editingRecordId = record.id ?? null; // Use null if id is undefined
  }

  deleteRecord(id: number) {
    this.recordService.deleteRecord(id).subscribe({
      next: () => {
        console.log('Record deleted successfully');
        this.loadRecords();
      },
      error: (error) => console.error('Error deleting record:', error)
    });
  }

  resetForm() {
    this.record = { name: '', description: '' };
    this.editingRecordId = null;
  }
}
