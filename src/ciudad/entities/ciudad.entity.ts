import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";



@Entity('Ciudades')
export class Ciudad {
    @PrimaryGeneratedColumn()
    private idCiudad: number

    @Column({length: 50})
    public Nombre: string

    @Column('int')
    public CodigoPostal: number
}