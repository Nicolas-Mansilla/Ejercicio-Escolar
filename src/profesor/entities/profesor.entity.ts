import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Profesor')
export class Profesor {
  @PrimaryGeneratedColumn()
  private idProfesor: number;

  @Column({ length: 50 })
  public Nombre: string;

  @Column({ length: 50 })
  public Apellido: string;
}
