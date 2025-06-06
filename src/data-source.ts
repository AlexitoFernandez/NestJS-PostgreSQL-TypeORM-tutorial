import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Task } from '../src/tasks/entities/task.entity'; // Ajusta si tu ruta es diferente

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'alexito', // Cambia si usas otro usuario
  password: 'postgres',
  database: 'my_db',
  synchronize: false,
  logging: false,
  entities: [Task],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
