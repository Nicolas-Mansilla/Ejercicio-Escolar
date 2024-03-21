import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { Estudiante } from './estudiantes/entities/estudiante.entity';
import { EscuelaModule } from './escuela/escuela.module';
import { Escuela } from './escuela/entities/escuela.entity';
import { Ciudad } from './ciudad/entities/ciudad.entity';
import { ProfesorModule } from './profesor/profesor.module';
import { Profesor } from './profesor/entities/profesor.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'escolar',
      entities: [Profesor],
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
export class AppModule {}
