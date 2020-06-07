import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async get(): Promise<string> {
    return this.userService.get();
  }

  @Post()
  async post(): Promise<string> {
    await this.userService.post();
    return "jiji";
  }
}
