import { EntityTarget, getConnection, Repository } from 'typeorm';

export const generateRepo = <Entity>(
  con_name: string,
  entity: EntityTarget<Entity>,
): Repository<Entity> => getConnection(con_name).getRepository(entity);
