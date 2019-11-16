import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar", {length: 255})
    email: string;

    @Column("text")
    password: string;

    @BeforeInsert()
    addId() {
        this.id = uuidv4();
    }

}
