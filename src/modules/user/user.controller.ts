import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly pingService: UserService) {}

  @Get()
  async get(): Promise<string> {
    return this.pingService.get();
  }
}
