// src/app/services/record.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Record } from '../models/record.model'; // Import model from models folder

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private apiUrl = 'api/records';

  constructor(private http: HttpClient) { }

  // Add a new record
  addRecord(record: Record): Observable<Record> {
    return this.http.post<Record>(this.apiUrl, record);
  }

  // Get all records
  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.apiUrl);
  }

  // Get a single record by ID
  getRecord(id: number): Observable<Record> {
    return this.http.get<Record>(`${this.apiUrl}/${id}`);
  }

  // Update an existing record
  updateRecord(record: Record): Observable<Record> {
    return this.http.put<Record>(`${this.apiUrl}/${record.id}`, record);
  }

  // Delete a record by ID
  deleteRecord(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
