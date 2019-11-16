import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    addId() {
        this.id = uuidv4();
    }

}
