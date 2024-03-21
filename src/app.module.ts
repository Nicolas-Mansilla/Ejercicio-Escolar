import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { Estudiante } from './estudiantes/entities/estudiante.entity';
import { EscuelaModule } from './escuela/escuela.module';
import { Escuela } from './escuela/entities/escuela.entity';
import { ProfesorModule } from './profesor/profesor.module';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password:'1234',
      database: 'escolar',
      entities: [],
      synchronize: true,
    }),
    CiudadModule,
    EstudiantesModule,
    EscuelaModule,
    ProfesorModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
