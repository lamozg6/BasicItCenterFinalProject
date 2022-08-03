import id from 'date-fns/locale/id';

export interface IProblem {
  id: string;
  name: string;
  description: string;
  function_name: string;
}

export interface IProblemData {
  problem: IProblem;
}

// controller types
export interface IProblem_ResBody_DTO extends IProblemData {}

export interface IProblem_create_ReqBody_DTO extends Omit<IProblem, 'id'> {}

export interface IProblem_create_ResBody_DTO extends IProblem_ResBody_DTO {}

// service types
export interface IProblem_create_Args extends IProblem {}

export interface IProblem_create_Result extends IProblem_ResBody_DTO {}
