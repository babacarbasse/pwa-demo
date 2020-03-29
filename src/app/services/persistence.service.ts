import { Injectable } from '@angular/core';
import { openDB } from 'idb';
import { Observable, from } from 'rxjs';


const DEMO_DB_NAME = 'pwa_demo';
export const DEMO_STORE_NAME = 'pwa_demo_store';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  private demoDB;

  constructor() {}

  async connect(): Promise<void> {
    this.demoDB = await openDB(DEMO_DB_NAME, 2, {
      upgrade(db) {
        db.createObjectStore(DEMO_STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        });
      },
    });
  }

  getAll(storeName: string): Observable<any> {
    return from(this.demoDB.getAll(storeName));
  }

  save(storeName: string, item: any): Observable<any> {
    return from(this.demoDB.put(storeName, item));
  }
}
