import { DB_API } from '../db';

export const connect = DB_API.connect.bind(DB_API);
