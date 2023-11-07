import postgres from 'postgres';

export const sql = postgres({
  database: 'citybike',
  password: 'academy',
  port: 5432,
  user: 'academy',
  hostname: '127.0.0.1',
});
