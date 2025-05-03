import { Injectable, Scope } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService {
  prefix: string;
  private id: string;

  constructor() {
    this.id = uuid();
    console.log(`LoggerService initialized with id: ${this.id}`);
  }

  log(message: string) {
    const data = `${this.prefix}_${this.id}: ${message}`;
    console.log(data);
    return data;
  }
}
