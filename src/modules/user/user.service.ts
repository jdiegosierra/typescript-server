import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from "mongoose";
import * as pg from 'pg';
interface IUser extends mongoose.Document {
  name: string;
  username: string;
}

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true }
});



@Injectable()
export class UserService{
  constructor(@Inject('DBConnectionToken') private repository: any) {}

  get() {
    return 'pong';
  }

  async post() {
  //   // @ts-ignore
  //   const User = this.repository.model<IUser>("User", UserSchema);
  //   // this.repository.save({name: "diego", username: "dyeghikoo0"});
  //   console.log('2');
  //   const user = new User({name: "diegolandiaaaaaaaaaa", username: "dyeghikooooo"});
  //
  //   return user.save((err: any) => {
  //     if (err) {
  //       console.log(err);
  //       return 'ok';
  //     } else {
  //       console.log('3');
  //       return 'okey';
  //     }});
    const client = new pg.Client({
      host: '172.24.0.3',
      port: 5432,
      user: 'postgres',
      database: 'postgres',
      password: 'p@ssw0rd',
    });
    client.connect(err => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
      }
    })
    return 'algo';

  //   this.repository.end();
  //   this.repository.query('SELECT * FROM Users;', (err, res) => {
  //   console.log(err, res)
  //     this.repository.end()
  //     return 'biueeen';
  // })
  }
}
