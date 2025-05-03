import { Injectable, Scope } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable({ scope: Scope.REQUEST })
export class UserSessionService {
  private id: string;
  constructor() {
    this.id = uuid();
    console.log(`UserSessionService initialized with id: ${this.id}.`);
  }

  getUserSessionId() {
    const data = `User session from Request-Scope UserSessionService (${this.id})`;
    console.log(data);
    return data;
  }
}
