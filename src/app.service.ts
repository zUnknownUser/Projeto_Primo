
import { Injectable } from '@nestjs/common';

import { User } from './user.entity';



@Injectable()

export class AppService {

  private users: User[] = [];



  findAll(): Promise<User[]> {

    return Promise.resolve(this.users);

  }



  findOne(id: string): Promise<User> {

    const user = this.users.find(user => user.id === id);

    return Promise.resolve(user);

  }



  remove(id: string): Promise<void> {

    this.users = this.users.filter(user => user.id !== id);

    return Promise.resolve();

  }

}
