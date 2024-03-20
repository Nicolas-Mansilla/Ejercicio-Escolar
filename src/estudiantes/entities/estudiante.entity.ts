import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity('estudiantes')
export class Estudiante {
    @PrimaryGeneratedColumn()
    private idEstudiante :number;
    @Column({length:50})
    public nombre :string;
    @Column({length:50})
    public apellido :string;
    @Column('datetime')
    public fecha_nacimiento:Date;
    
    


    

}
