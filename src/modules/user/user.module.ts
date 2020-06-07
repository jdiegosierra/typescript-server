import { Module, Scope } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import * as mongoose from "mongoose";
import config from "../../config/default";
import {Client} from 'pg';

export class FactoryDB {
  constructor(private config: any) {}
  // getDBConnection() {
  //   return mongoose.createConnection(config['server'].DB_TYPE + '://' + config['server'].DB_HOST + ':' + config['server'].DB_PORT + '/' + config['server'].DB_NAME, { useNewUrlParser: true });
  // }
  getDBConnection() {
    return new Client({
      user: 'postgres',
      host: '172.24.0.2',
      database: 'postgres',
      password: 'p@ssw0rd',
      port: 5000,
    })
  }
}

const Repository = {
  provide: 'DBConnectionToken',
  useFactory: async () => {
    return new FactoryDB(config).getDBConnection();
  },
  scope: Scope.DEFAULT,
};

@Module({
  controllers: [UserController],
  providers: [UserService, Repository]
})
export class UserModule {}
