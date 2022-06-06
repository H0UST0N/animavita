/**
 * @namespace Characters
 */

import GenericDAO from "../GenericDAO";

const route = 'characters';

export interface IGetCharacters {
  data: {
    id: string;
    attributes: {
      canonicalName: string;
      otherNames: string[];
      description: string;
      image: {
        original: string;
      }
    };
  }[];
  links: {
    first: string;
    prev: string;
    next: string;
    last: string;
  };
  meta:{
    count: number;
  }
}

export interface IPostCharacters {
  id?: string;
  description: string;
}

const get = async (filters?: { name: string; value: string }[]): Promise<IGetCharacters> => GenericDAO.get(route,null, filters);

const getById = async (id: string): Promise<IGetCharacters> => GenericDAO.get(route, id);

const save = async (data: IPostCharacters) => GenericDAO.save(route, data);

const edit = async (data: IPostCharacters, id: string) => GenericDAO.save(route, data, id);

export default {
  get,
  getById,
  save,
  edit
};
