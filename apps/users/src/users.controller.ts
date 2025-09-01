import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.findAll')
  findAll() {
    console.log('message pattern users');

    return this.usersService.findAll();
  }
}
