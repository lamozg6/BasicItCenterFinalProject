import { UserEntity } from '../../db/entities/User.entity';
import { IUser } from '../../../common/types/user.types';

export function transform(entity: UserEntity): IUser {
  return {
    id: entity[0].id,
    name: entity[0].name,
    surname: entity[0].surname,
    username: entity[0].username,
    email: entity[0].email,
    gender: entity[0].gender,
    birthdate: entity[0].birthdate,
  };
}
