import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";


@Entity('Escuela')
export class Escuela {
    @PrimaryGeneratedColumn()
    private idEscuela :number;
    @Column({length:50})
    public nombre:string;
    @Column({length:50})
    public domicilio:string;
}
