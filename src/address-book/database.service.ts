import { Injectable, Scope } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable({ scope: Scope.DEFAULT })
export class DatabaseService {
  private id: string;
  constructor() {
    this.id = uuid();
    console.log(`DatabaseService initialized with id: ${this.id}.`);
  }

  getDatabaseConnectionString() {
    const data = `Database connection string from Singleton DatabaseService (${this.id})`;
    console.log(data);
    return data;
  }
}
