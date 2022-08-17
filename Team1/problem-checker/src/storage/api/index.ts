import { DB_API } from '../db';

export const connect = DB_API.connect.bind(DB_API);

export * as Users from './users';
export * as Problems from './problems';
export * as Auth from './auth';
