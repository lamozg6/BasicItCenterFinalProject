import { ApiPropertyOptions } from '@nestjs/swagger';
import { ValidatorConstraintInterface } from 'class-validator';

export interface IFieldConfig extends Omit<ApiPropertyOptions, 'isArray'> {
  type: Function;
  required: boolean;
  nullable: boolean;
  title: string;
  example?: unknown;
  is_array?: boolean;
  is_email?: boolean;
  is_int?: boolean;
  is_bigint?: boolean;
  is_json?: boolean;
  is_uuid?: boolean;
  is_url?: boolean;
  // Number's min value
  min?: number;
  // Number's max value
  max?: number;
  // String's min length
  min_length?: number;
  // String's max length
  max_length?: number;
  // Array's min size
  min_size?: number;
  // Array's max size
  max_size?: number;
  custom_validator?: ValidatorConstraintInterface;
}
