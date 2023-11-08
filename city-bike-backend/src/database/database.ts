import postgres from 'postgres';

/**
 * In a real application, these settings should be given
 * through environmental variables so that these are not commited
 * to the git repository and are not limited to this environment =)
 */
export const sql = postgres({
  database: 'citybike',
  password: 'academy',
  port: 5432,
  user: 'academy',
  hostname: '127.0.0.1',
  transform: postgres.camel,
});
