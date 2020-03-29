import { Injectable } from '@angular/core';
import { PersistenceService, DEMO_STORE_NAME } from './persistence.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private persistenceService: PersistenceService) {}

  getToDos(): Observable<Demo[]> {
    return this.persistenceService.getAll(DEMO_STORE_NAME);
  }

  toggleToDo(toDo: Demo): Observable<void> {
    return this.persistenceService.save(DEMO_STORE_NAME, {
      ...toDo,
      done: !toDo.done,
    });
  }

  addToDo(title: string, description: string): Observable<void> {
    return this.persistenceService.save(DEMO_STORE_NAME, {
      title,
      done: false,
      description,
    });
  }
}

interface Demo {
  done: boolean;
  title: string;
  description: string;
}
