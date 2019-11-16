import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
