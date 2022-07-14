import { createConnection } from 'typeorm';

export class DB_API {
  public static async connect() {
    await createConnection({
      type: 'postgres',
      synchronize: true,
      entities: [
      ],
      name: process.env.DB_CONNECTION_NAME,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      extra: {
        max: process.env.DB_CONNECTIONS_LIMIT,
      },
    });
  }
}
