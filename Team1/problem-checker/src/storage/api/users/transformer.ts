import { UserEntity } from '../../db/entities/User.entity';
import { IUser } from '../../../common/types/user.types';


export function transform(entity: UserEntity): IUser {
  return {
    id: entity.id,
    name: entity.name,
    surname: entity.surname,
    username: entity.username,
    email: entity.email,
    gender: entity.gender,
    birthdate: entity.birthdate,
  };
}
